// packages
import { ChatInputCommandInteraction, InteractionResponse } from 'discord.js';
import {
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
import { getRandomArrayElement } from '@lib/utilities';

const player = createAudioPlayer();

const playVoiceLine = async (readableStream: Readable) => {
	// try to auto-detect the type to use the Opus player preferentially over FFmpeg for performance reasons
	const { stream, type } = await demuxProbe(readableStream);

	// create the audio resource for the player
	const resource = createAudioResource(stream, { inputType: type });

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
		connection.destroy();
		return null;
	}
};

export const handleVoiceConnection = async (
	interaction: ChatInputCommandInteraction
) => {
	// find the command that matches the interaction command name
	const command = commands.find(({ name }) => name === interaction.commandName);

	if (!command) return;

	// create the connection
	const connection = await connectToChannel(interaction);

	if (!connection || connection instanceof InteractionResponse) return;

	// subscribe to the audio player
	const subscription = connection.subscribe(player);

	// if the subscription isn't possible, destroy the connection to preserve memory
	if (!subscription) return connection.destroy();

	// play a random voice line from the pertinent category (for single-item voice lines, this just returns that element)
	await playVoiceLine(
		createReadStream(
			`./src/lib/sound-effects/${getRandomArrayElement(command.voiceLines)}`
		)
	);

	// when the audio player is idle, unsubscribe from the connection subscription
	player.on(AudioPlayerStatus.Idle, () => {
		subscription.unsubscribe();
	});
};
