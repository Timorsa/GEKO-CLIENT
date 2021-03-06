import React from 'react';
import { MdFavoriteBorder, MdSearch } from 'react-icons/md/index';

const Header = ({ cart }) => {
	return (
		<div className='header'>
			<div className='logo'>
				<span>G</span>.<span>E</span>.<span>K</span>.<span>O</span>
			</div>
			<div className='search'>
				<input type='text' />
				<MdSearch />
			</div>
			<div className='header-right'>
				<MdFavoriteBorder />
				<span className='cart'>{cart.length}</span>
				<span className='user'>US</span>
			</div>
		</div>
	);
};

export default Header;
