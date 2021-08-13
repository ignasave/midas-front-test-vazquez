import { FC, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MutantsContext } from '../MutantsProvider';

const activeLink = {
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: '#FF0606',
	borderBottomWidth: '4px',
	borderColor: '#FF0606',
	borderBottomStyle: 'solid',
	textDecoration: 'none',
};

const link = {
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textDecoration: 'none',
	color: 'black',
};
const Layout: FC = ({ children }) => {
	const { mutants } = useContext(MutantsContext);
	const location = useLocation();

	return (
		<div>
			<div
				style={{
					marginTop: '100px',
					color: '#FAFF03',
					fontWeight: 'bold',
					fontSize: '48px',
					lineHeight: '59px',
					letterSpacing: '0.31em',
					textAlign: 'center',
					marginBottom: '43px',
				}}>
				Magneto web
			</div>

			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
				<div
					style={{
						width: '80%',
						backgroundColor: '#FAFAFA',
						height: '112px',
						display: 'flex',
						flexDirection: 'row',
						fontWeight: 600,
						fontSize: '26px',
						justifyContent: 'space-evenly',
					}}>
					<Link to='/' style={location.pathname === '/' ? activeLink : link}>
						Detector de mutantes
					</Link>
					<Link to='/loadMutants' style={location.pathname === '/loadMutants' ? activeLink : link}>
						Cargar mutantes
					</Link>
					<Link to='/myMutants' style={location.pathname === '/myMutants' ? activeLink : link}>
						Mis mutantes ({mutants.length})
					</Link>
				</div>
				<div style={{ width: '80%' }}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
