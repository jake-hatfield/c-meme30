// packages
import { Client, VoiceChannel } from 'discord.js';
import {
	AudioPlayerStatus,
	createAudioPlayer,
	createAudioResource,
	entersState,
	joinVoiceChannel,
	StreamType,
	VoiceConnectionStatus,
} from '@discordjs/voice';

// lib
import commands from '../commands';

const player = createAudioPlayer();

const playVoiceLine = (voiceLine: string) => {
	const resource = createAudioResource(`../sound-effects${voiceLine}`, {
		inputType: StreamType.Arbitrary,
	});

	player.play(resource);

	return entersState(player, AudioPlayerStatus.Playing, 5e3);
};

const connectToChannel = async (interaction: any) => {
	const connection = joinVoiceChannel({
		channelId: interaction.channelId,
		guildId: interaction.guildId,
		adapterCreator: interaction.guild.voiceAdapterCreator,
	});

	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
		return connection;
	} catch (error) {
		connection.destroy();
		throw error;
	}
};

export default async (client: Client, interaction: any) => {
	if (
		!interaction?.channelId ||
		!interaction?.guildId ||
		!interaction.guild?.voiceAdapterCreator
	) {
		await interaction.reply({ ephemeral: true, content: 'Bleep bloop' });
		return;
	}

	const command = commands.find((c) => c.name === interaction.commandName);

	if (!command) return;

	console.log(command);
};
