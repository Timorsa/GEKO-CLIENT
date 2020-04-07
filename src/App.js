import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from 'react-router-dom';

//components
import Header from './components/layout/Header';
import Banner from './components/layout/Banner';
import Navbar from './components/layout/Navbar';
import Department from './components/pages/Department';

import './App.scss';
import { MdHome } from 'react-icons/md';

const App = () => {
	const [cart, setCart] = useState([]);
	return (
		<Router>
			<div className='App'>
				<Header cart={cart} />
				<div className='container'>
					<Banner />
					<div className='store'>
						<Navbar />
						<Switch>
							<Route exact path='/'>
								<Department />
							</Route>
							<Route path='/store/:department'>
								<Department />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
