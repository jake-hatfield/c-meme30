// helper to get a random element from array
export const getRandomArrayElement = <T>(items: T[]) => {
	return items[Math.floor(Math.random() * items.length)];
};

export const randomizeCase = (string: string) => {
	let randomizedString = '';

	string.split('').forEach((character) => {
		if (character === ' ') return (randomizedString += character);

		const shouldBeUppercase = Math.random() < 0.5;

		if (shouldBeUppercase) return (randomizedString += character.toUpperCase());

		return (randomizedString += character.toLowerCase());
	});

	return randomizedString;
};
