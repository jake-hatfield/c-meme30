// packages
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import express, { Express, Response, Request } from 'express';
import 'module-alias/register';

// env
dotenv.config();

// lib
import interactionCreate from '@lib/interactions/create';
import ready from '@lib/ready';
import registerCommands from '@lib/commands/register';

const title = 'C-Meme30';

// server
const app: Express = express();
const port = process.env.PORT;

// routes
app.get('/', (req: Request, res: Response) => {
	try {
		res.send(`${title} is up and running`);
	} catch (error) {
		console.log(error);
		return res.status(500).send(`Something went wrong with ${title}`);
	}
});

// initialize Discord client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildVoiceStates,
	],
});

// client ready up
ready(client);

// register the slash commands
registerCommands();

// handle interactions
interactionCreate(client);

client.login(process.env.DISCORD_TOKEN);

app.listen(port || 3000, () => {
	console.log(`[server]: ${title} is running @ port ${port}`);
});
