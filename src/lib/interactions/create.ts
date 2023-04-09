// packages
import { ChatInputCommandInteraction, Client, Interaction } from 'discord.js';

// lib
import commands from '@lib/commands';

export default (client: Client): void => {
	client.on('interactionCreate', async (interaction: Interaction) => {
		// if not a chat command, return
		if (!interaction.isChatInputCommand()) return;

		// if it is a command, use the slash command handler
		if (interaction.isCommand()) {
			await handleSlashCommand(client, interaction);
		}
	});
};

const handleSlashCommand = async (
	client: Client,
	interaction: ChatInputCommandInteraction
): Promise<void> => {
	const slashCommand = commands.find((c) => c.name === interaction.commandName);

	if (!slashCommand) {
		await interaction.reply({
			content: 'Bleep bloop. I am a dumb robot 🤖',
		});
		return;
	}

	slashCommand.run(client, interaction);
};
