// packages
import { ChatInputCommandInteraction, Client } from 'discord.js';

// lib
import content from '@lib/content';
import { handleVoiceConnection } from '@lib/interactions';

// dynamically create commands from the content
const commands = content.map(({ name, description, voiceLines }) => {
	return {
		name,
		description,
		voiceLines,
		run: async (client: Client, interaction: ChatInputCommandInteraction) => {
			if (!interaction) return;

			// create the "thinking..." text
			await interaction.deferReply({ ephemeral: true });

			// join the user's voice channel and play the voice line
			await handleVoiceConnection(interaction);

			// update the bot's reply
			await interaction.editReply('Yattah ヤッタ');
		},
	};
});

export default commands;
