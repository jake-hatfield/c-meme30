// packages
import { ChatInputCommandInteraction, Client, Interaction } from 'discord.js';

// lib
import commands from '../commands/index';

export default (client: Client): void => {
	client.on('interactionCreate', async (interaction: Interaction) => {
		if (!interaction.isChatInputCommand()) return;

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
		interaction.followUp({ content: 'Bleep bloop. I am a dumb robot 🤖' });
		return;
	}

	await interaction.deferReply();

	slashCommand.run(client, interaction);
};
