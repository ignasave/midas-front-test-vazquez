import { createContext, useEffect, useState } from 'react';
import { getLocalMutants, LocalMutant, setLocalMutants } from '../../services/localMutants';

export const MutantsContext = createContext<MutantsContextType>({ mutants: [], setMutants: () => {} });

export type MutantsContextType = {
	mutants: Array<LocalMutant>;
	setMutants: (mutants:  Array<LocalMutant>) => void;
};

export const useMutants = () => {
	const [mutants, _setMutants] = useState<LocalMutant[]>([]);

	useEffect(() => {
		const getMutants = async () => {
			const mutants = await getLocalMutants();
			_setMutants(mutants);
		};
		getMutants();
	}, []);

	const setMutants = async (mutants: Array<LocalMutant>) => {
		setLocalMutants(mutants);
		_setMutants(mutants);
	};

	return [mutants, setMutants];
};
