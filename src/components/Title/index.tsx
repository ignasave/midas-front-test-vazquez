import { FC } from 'react';

const Title: FC = ({ children }) => {
	return (
		<div
			style={{
				fontSize: '42px',
				fontFamily: 'Montserrat',
				fontWeight: 600,
				paddingTop: '100px',
				paddingBottom: '20px',
			}}>
			{children}
		</div>
	);
};

export default Title;
