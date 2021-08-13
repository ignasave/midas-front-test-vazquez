import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MutantDetector from './pages/MutantDetector';
import LoadMutants from './pages/LoadMutants';
import Layout from './components/Layout';
import { MutantsContext, useMutants } from './components/MutantsProvider';
import MyMutants from './pages/MyMutants';

const App = () => {
	const [mutants, setMutants] = useMutants();
	return (
		<MutantsContext.Provider
			value={
				//@ts-ignore//
				{ mutants, setMutants }
			}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path='/' component={MutantDetector} />
						<Route exact path='/loadMutants' component={LoadMutants} />
						<Route exact path='/myMutants' component={MyMutants} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</MutantsContext.Provider>
	);
};

export default App;
