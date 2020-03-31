import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div className='hd-left'>
				<div className='logo'></div>
				<a to='/'>MEN</a>
				<a to='/'>WOMEN</a>
			</div>
			<div className='hd-right'>
				<a>user</a>
				<a>heart</a>
				<a>shopping-kart</a>
			</div>
		</div>
	);
};

export default Header;
