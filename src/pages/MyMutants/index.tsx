import { useCallback, useContext } from 'react';
import { MutantsContext } from '../../components/MutantsProvider';
import Title from '../../components/Title';
import { LocalMutant } from '../../services/localMutants';
import Mutant from './Mutant';

const MyMutants = () => {
	const { mutants, setMutants } = useContext(MutantsContext);

	const favMutant = useCallback(
		(mutant: LocalMutant) => {
			const mutantIndex = mutants.findIndex(_mutant => _mutant.name === mutant.name);
			const _mutants = [...mutants];
			_mutants[mutantIndex].favorite = !_mutants[mutantIndex].favorite;
			setMutants(_mutants);
		},
		[mutants, setMutants]
	);

	const deleteMutant = useCallback(
		(mutant: LocalMutant) => {
			const mutantIndex = mutants.findIndex(_mutant => _mutant.name === mutant.name);
			const _mutants = [...mutants];
			_mutants.splice(mutantIndex, 1);
			setMutants(_mutants);
		},
		[mutants, setMutants]
	);

	return (
		<div
			style={{
				backgroundColor: 'white',
				paddingLeft: '100px',
			}}>
			<Title>Listado de mutantes</Title>

			<div style={{ paddingRight: '50px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
				{mutants.map(mutant => (
					<Mutant key={mutant.name} mutant={mutant} favMutant={favMutant} deleteMutant={deleteMutant} />
				))}
			</div>
		</div>
	);
};

export default MyMutants;
