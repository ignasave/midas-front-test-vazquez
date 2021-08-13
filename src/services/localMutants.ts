export const getLocalMutants = async () => {
	const mutants = localStorage.getItem('mutants');
	return await JSON.parse(mutants ? mutants : '[]');
};

export const setLocalMutants = async (mutants: Array<LocalMutant>) => {
	const jsonMutants = await JSON.stringify(mutants);
	localStorage.setItem('mutants', jsonMutants);
};

export type LocalMutant = {
    name: string,
    superpower: string,
    powerLevel: number,
	favorite: boolean,
} 