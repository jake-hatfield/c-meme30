// packages
import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';

// env
dotenv.config();

// lib
import commands from '@lib/commands';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

// register commandss
export default async () => {
	try {
		console.log('Started refreshing application (/) commands 📃');

		await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
			body: commands,
		});
	} catch (error) {
		console.error(error);
	}
};
