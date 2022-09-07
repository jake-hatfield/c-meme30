declare global {
	namespace NodeJS {
		interface ProcessEnv {
			APP_ID: string;
			CLIENT_ID: string;
			DISCORD_TOKEN: string;
			NODE_ENV: 'development' | 'production';
			OAUTH_URL: string;
			PORT?: string;
			PUBLIC_KEY: string;
		}
	}
}

export {};
