// packages
import { ChatInputCommandInteraction, Client } from 'discord.js';

// lib
import content from '@lib/content';
import { handleVoiceConnection } from '@lib/interactions';

// dynamically create commands from the content
const commands = content.map(({ name, description, content }) => {
	return {
		name,
		description,
		content,
		run: async (client: Client, interaction: ChatInputCommandInteraction) => {
			if (!interaction) return;

			// create the "thinking..." text
			await interaction.deferReply({ ephemeral: true });

			// join the user's voice channel and play the voice line
			await handleVoiceConnection(interaction);
		},
	};
});

export default commands;
