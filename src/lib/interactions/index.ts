// packages
import { ChatInputCommandInteraction, InteractionResponse } from 'discord.js';
import {
	AudioPlayer,
	AudioPlayerStatus,
	createAudioPlayer,
	createAudioResource,
	demuxProbe,
	entersState,
	joinVoiceChannel,
	VoiceConnectionStatus,
} from '@discordjs/voice';
import { createReadStream } from 'fs';
import { Readable } from 'stream';

// lib
import commands from '@lib/commands';
import { getRandomArrayElement, randomizeCase } from '@lib/utilities';

const playVoiceLine = async (player: AudioPlayer, readableStream: Readable) => {
	// try to auto-detect the type to use the Opus player preferentially over FFmpeg for performance reasons
	const { stream, type } = await demuxProbe(readableStream);

	// create the audio resource for the player
	const resource = createAudioResource(stream, {
		inlineVolume: true,
		inputType: type,
	});
	resource.volume?.setVolume(0.25);

	// play the created resource
	player.play(resource);
};

const connectToChannel = async (interaction: ChatInputCommandInteraction) => {
	if (!interaction?.guild)
		return await interaction.reply({
			ephemeral: true,
			content: 'Bleep bloop. I am a dumb robot 🤖',
		});

	// get the member who created the interaction
	const member = interaction.guild.members.cache.get(interaction.user.id);

	if (!member) return null;

	if (!member.voice.channelId) {
		await interaction.editReply(
			'Please join a voice channel first, master jedi 🥷'
		);
		return null;
	}

	// get the channel the member is currently connected to
	const channel = member.voice.channel;

	if (!channel) return null;

	// make the bot join the voice channel
	const connection = joinVoiceChannel({
		channelId: channel.id,
		guildId: channel.guild.id,
		// @ts-ignore
		adapterCreator: channel.guild.voiceAdapterCreator,
	});

	try {
		// allocate 3 seconds to enter the ready state
		await entersState(connection, VoiceConnectionStatus.Ready, 3000);
		return connection;
	} catch (error) {
		console.log(error);
		if (connection) connection.destroy();
		return null;
	}
};

export const handleVoiceConnection = async (
	interaction: ChatInputCommandInteraction
) => {
	try {
		// find the command that matches the interaction command name
		const command = commands.find(
			({ name }) => name === interaction.commandName
		);

		if (!command) return;

		const content = getRandomArrayElement(command.content);

		// create the connection
		const connection = await connectToChannel(interaction);

		if (!connection || connection instanceof InteractionResponse) return;

		connection.on(
			VoiceConnectionStatus.Disconnected,
			async (oldState, newState) => {
				try {
					await Promise.race([
						entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
						entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
					]);
					// Seems to be reconnecting to a new channel - ignore disconnect
				} catch (error) {
					// Seems to be a real disconnect which shouldn't be recovered from
					connection.destroy();
				}
			}
		);

		const player = createAudioPlayer();

		// subscribe to the audio player
		const subscription = connection.subscribe(player);

		// if the subscription isn't possible, destroy the connection to preserve memory
		if (!subscription) return connection.destroy();

		// play a random voice line from the pertinent category (for single-item voice lines, this just returns that element)
		await playVoiceLine(
			player,
			createReadStream(`./src/lib/sound-effects/${content.voice}`)
		);

		await interaction.editReply(randomizeCase(content.text));

		// when the audio player is idle, unsubscribe from the connection subscription
		player.on(AudioPlayerStatus.Idle, async () => {
			if (interaction.isRepliable()) await interaction.deleteReply();
			if (connection) connection.disconnect();
			if (subscription) subscription.unsubscribe();
		});
	} catch (error) {
		interaction.reply('Your Midi-Chlorians are too low to use this command.');
	}
};
