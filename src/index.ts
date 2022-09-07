// packages
import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import express from 'express';

// env
dotenv.config();

// lib
import ready from './lib/ready';
import interactionCreate from './lib/interactions/create';

// types
import type { Request, Response } from 'express';
import registerCommands from './lib/commands/register';

// initialize server
const app = express();
app.get('/', (req: Request, res: Response) => {
	res.send('Hello there');
});

// initialize Discord client
const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

ready(client);

registerCommands();

interactionCreate(client);

client.login(process.env.DISCORD_TOKEN);

app.listen(process.env.PORT || 3000);
