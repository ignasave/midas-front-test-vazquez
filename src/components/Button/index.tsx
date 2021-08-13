import { FC } from 'react';

const Button: FC<{ onClick: () => void }> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: '#000000',
				borderRadius: '5px',
				color: '#FFFFFF',
				width: '175px',
				height: '55px',
				fontFamily: 'Montserrat',
				fontSize: '26px',
				fontWeight: 600,
			}}>
			{children}
		</button>
	);
};

export default Button;
