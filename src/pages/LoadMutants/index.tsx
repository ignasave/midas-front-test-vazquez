import { useContext, useState } from 'react';
import Button from '../../components/Button';
import { MutantsContext } from '../../components/MutantsProvider';
import Title from '../../components/Title';

const LoadMutants = () => {
	const { setMutants, mutants } = useContext(MutantsContext);

	const [newMutantState, setNewMutantState] = useState({ show: false, ok: false, message: '' });

	const [name, setName] = useState('');
	const [superpower, setSuperpower] = useState('');
	const [powerLevel, setPowerLevel] = useState(1);

	const handleSubmit = () => {
		if (!mutants.some(mutant => mutant.name === name)) {
			const newMutant = { name, superpower, powerLevel, favorite: false };
			setMutants([...mutants, newMutant]);
			setNewMutantState({ show: true, ok: true, message: 'Nuevo mutante añadido con exito!' });
		} else {
			setNewMutantState({ show: true, ok: false, message: 'El mutante ya existe!' });
		}
	};

	return (
		<div
			style={{
				backgroundColor: 'white',
				paddingLeft: '100px',
				fontFamily: 'Montserrat',
			}}>
			<Title>Registrar nuevo mutante</Title>

			{newMutantState.show && (
				<div
					style={{
						fontSize: '22px',
						fontWeight: 600,
						paddingTop: '20px',
						paddingBottom: '20px',
						color: newMutantState.ok ? 'green' : 'red',
					}}>
					{newMutantState.message}
				</div>
			)}

			<div>
				<label
					htmlFor='name'
					style={{
						fontSize: '22px',
						display: 'block',
						marginBottom: '10px',
						marginTop: '30px',
					}}>
					Nombre del mutante*
				</label>
				<input
					id='name'
					style={{
						width: '462px',
						height: '58px',
						border: 0,
						fontSize: '18px',
						boxShadow: '5px 4px 10px rgba(0, 0, 0, 0.5)',
					}}
					type='text'
					placeholder='Nombre'
					value={name}
					onChange={e => setName(e.target.value)}
				/>

				<label
					htmlFor='superpower'
					style={{
						fontSize: '22px',
						display: 'block',
						marginBottom: '10px',
						marginTop: '30px',
					}}>
					Superpoder*
				</label>
				<input
					id='superpower'
					style={{
						width: '462px',
						height: '58px',
						border: 0,
						fontSize: '18px',
						boxShadow: '5px 4px 10px rgba(0, 0, 0, 0.5)',
					}}
					type='text'
					placeholder='Ingresa el superpoder'
					value={superpower}
					onChange={e => setSuperpower(e.target.value)}
				/>

				<label
					style={{
						fontSize: '22px',
						display: 'block',
						marginBottom: '10px',
						marginTop: '30px',
					}}>
					Nivel*
				</label>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '462px',
					}}>
					<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<input
							type='radio'
							id='bajo'
							name='powerLevel'
							value='1'
							checked={powerLevel === 1}
							onChange={e => setPowerLevel(Number(e.target.value))}
						/>
						<label htmlFor='bajo' style={{ fontFamily: 'Monserrat', fontWeight: 300, fontSize: '20px' }}>
							Bajo
						</label>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<input
							type='radio'
							id='medio'
							name='powerLevel'
							value='2'
							checked={powerLevel === 2}
							onChange={e => setPowerLevel(Number(e.target.value))}
						/>
						<label htmlFor='medio' style={{ fontFamily: 'Monserrat', fontWeight: 300, fontSize: '20px' }}>
							Medio
						</label>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<input
							type='radio'
							id='alto'
							name='powerLevel'
							value='3'
							checked={powerLevel === 3}
							onChange={e => setPowerLevel(Number(e.target.value))}
						/>
						<label htmlFor='alto' style={{ fontFamily: 'Monserrat', fontWeight: 300, fontSize: '20px' }}>
							Alto
						</label>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<input
							type='radio'
							id='muyalto'
							name='powerLevel'
							value='4'
							checked={powerLevel === 4}
							onChange={e => setPowerLevel(Number(e.target.value))}
						/>
						<label htmlFor='muyalto' style={{ fontFamily: 'Monserrat', fontWeight: 300, fontSize: '20px' }}>
							Muy alto
						</label>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '130px', paddingBottom: '60px' }}>
				<Button onClick={handleSubmit}>Enviar</Button>
			</div>
		</div>
	);
};

export default LoadMutants;
