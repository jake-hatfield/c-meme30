// helper to get a random element from array
export const getRandomArrayElement = <T>(items: T[]) => {
	return items[Math.floor(Math.random() * items.length)];
};
