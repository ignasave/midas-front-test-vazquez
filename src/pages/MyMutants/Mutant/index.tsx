import { FC } from 'react';
import { LocalMutant } from '../../../services/localMutants';
import star from '../../../assets/icons/star-128x128.png';
import yellowStar from '../../../assets/icons/yellow-star.png';

interface Props {
	mutant: LocalMutant;
	favMutant: (mutant: LocalMutant) => void;
    deleteMutant: (mutant: LocalMutant) => void;
}

const Mutant: FC<Props> = ({ mutant, favMutant, deleteMutant }) => {
	const handleFavorite = () => favMutant(mutant);
    const handleDelete= () => deleteMutant(mutant);

	return (
		<div
			style={{
				height: '200px',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: 'black',
				width: 'calc(25% - 12px)',
				marginRight: 5,
				marginLeft: 5,
				marginTop: 25,
				marginBottom: 25,
				fontFamily: 'Montserrat',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}>
			<div style={{ display: 'flex' }}>
				<div style={{ alignSelf: 'flex-start', width: 60, textAlign: 'center', fontSize: '22px', fontWeight: 600 }}>
					{mutant.powerLevel}
				</div>
				<div style={{ alignSelf: 'center', fontSize: '16px', fontWeight: 600, textAlign: 'center', color: '#6C6C6C' }}>
					{mutant.name}
				</div>
			</div>
			<div style={{ color: '#315DF6', fontWeight: 600, fontSize: '22px', textAlign: 'center' }}>{mutant.superpower}</div>
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<img
					onClick={handleFavorite}
					style={{ width: 20, height: 20, padding: 5, cursor: 'pointer' }}
					alt='star'
					src={mutant.favorite ? yellowStar : star}
				/>
				<img
                    onClick={handleDelete}
					style={{ width: 20, height: 20, padding: 5, cursor: 'pointer' }}
					alt='trash-can'
					src='https://img.icons8.com/material-outlined/24/000000/trash--v1.png'
				/>
			</div>
		</div>
	);
};

export default Mutant;
