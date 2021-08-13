export const postAnalizeDNASequence = async (sequence: DNASequence): Promise<Response> => {
	const jsonSequence = await JSON.stringify({ dna: sequence });
	const request = new Request('https://midas-mutantdna.herokuapp.com/mutant/', {
		method: 'POST',
		body: jsonSequence,
		headers: { 'Content-type': 'application/json' },
	});
	return fetch(request);
};

export type DNASequence = Array<string>;
