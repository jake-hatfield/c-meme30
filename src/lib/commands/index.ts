// packages
import { Client, Interaction } from 'discord.js';

// lib
import content from '../content';
import handleVoiceConnection from '../interactions';

// dynamically create commands from the content
const commands = content.map((c) => {
	return {
		name: c.name,
		description: c.description,
		voiceLines: c.voiceLines,
		run: async (client: Client, interaction: Interaction) => {
			if (!interaction) return;

			await handleVoiceConnection(client, interaction);
		},
	};
});

export default commands;
