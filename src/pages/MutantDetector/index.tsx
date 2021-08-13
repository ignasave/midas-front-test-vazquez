import { useCallback, useState } from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { DNASequence, postAnalizeDNASequence } from '../../services/mutant';

const MutantDetector = () => {
	const [ADNSequence, setADNSequence] = useState('');
	const [ADNSequenceError, setADNSequenceError] = useState(false);
	const [analizedMutant, setAnalizedMutant] = useState({ message: '', analized: false, mutant: false });

	const analizeDNASequence = useCallback(async (sequence: DNASequence) => {
		try {
			const response = await postAnalizeDNASequence(sequence);
			if (response.status === 200) {
				setAnalizedMutant({ message: 'El ADN es Mutante!', analized: true, mutant: true });
			} else if (response.status === 403) {
				setAnalizedMutant({ message: 'El ADN NO es Mutante!', analized: true, mutant: false });
			} else {
				setAnalizedMutant({ message: '', analized: false, mutant: false });
			}
		} catch (error) {
			console.error(error)
			setAnalizedMutant({ message: 'Hubo un error al analizar el ADN, por favor intente nuevamente', analized: true, mutant: false });
		}
	}, []);

	const handleClickAnalize = useCallback(() => {
		const explodedSequence = ADNSequence.split(',');
		let arraySequenceIsCorrect = true;
		const arraySequence = explodedSequence.map(sequence => {
			const formatted = sequence.trim().toUpperCase();
			if (!formatted.match(/([ATCG]{5})\S/)) {
				arraySequenceIsCorrect = false;
			}
			return formatted;
		});
		if (arraySequenceIsCorrect) {
			analizeDNASequence(arraySequence);
		} else {
			setAnalizedMutant({ message: '', analized: false, mutant: false });
		}
		setADNSequenceError(!arraySequenceIsCorrect);
	}, [ADNSequence, analizeDNASequence]);

	return (
		<div
			style={{
				backgroundColor: 'white',
				fontFamily: 'Montserrat',
				paddingLeft: '100px',
			}}>
			<Title>Ingresá la secuencia de ADN</Title>

			{ADNSequenceError && (
				<div
					style={{
						paddingTop: '20px',
						paddingBottom: '20px',
						fontWeight: 600,
						fontSize: '18px',
						color: 'red',
						paddingLeft: '100px',
					}}>
					Secuencia de ADN ingresada es incorrecta, recordá que debe estar compuesta por (A, T, C, G), y se componen de 6 en 6
					separadas por una coma. Ejemplo: ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG
				</div>
			)}

			{analizedMutant.analized && (
				<div
					style={{
						paddingTop: '20px',
						paddingBottom: '20px',
						fontWeight: 600,
						fontSize: '24px',
						textAlign: 'center',
						color: analizedMutant.mutant ? 'green' : 'red',
					}}>
					{analizedMutant.message}
				</div>
			)}

			<div style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '20px' }}>
				<input
					value={ADNSequence}
					onChange={e => setADNSequence(e.target.value)}
					type='text'
					style={{
						border: 0,
						height: '176px',
						fontSize: '42px',

						fontWeight: 300,
						boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
						width: '100%',
					}}
				/>
			</div>

			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '130px', paddingBottom: '60px' }}>
				<Button onClick={handleClickAnalize}>Analizar</Button>
			</div>
		</div>
	);
};

export default MutantDetector;
