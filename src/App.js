import React from 'react';

//components
import Header from './components/layout/Header';
import Banner from './components/layout/Banner';
import Navbar from './components/layout/Navbar';
import Department from './components/pages/Department';

import './App.scss';
import { MdHome } from 'react-icons/md';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<div className='container'>
				<Banner />
				<div className='store'>
					<Navbar />
					<Department />
				</div>
			</div>
		</div>
	);
};

export default App;
