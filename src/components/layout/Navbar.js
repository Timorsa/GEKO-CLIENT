import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<ul className='navbar primary-fnt'>
			<Link to='/'>
				<li className='nav-itm home'>Home</li>
			</Link>
			<Link to='/store/tops'>
				<li className='nav-itm'>
					Tops <span className='tops'></span>
				</li>
			</Link>
			<Link to='/store/shoes'>
				<li className='nav-itm'>
					Shoes <span className='shoes'></span>
				</li>
			</Link>
			<Link to='/store/jeans'>
				<li className='nav-itm'>
					Jeans <span className='jeans'></span>
				</li>
			</Link>
			<Link to='/store/dresses'>
				<li className='nav-itm'>
					Dresses <span className='dresses'></span>
				</li>
			</Link>
		</ul>
	);
};

export default Navbar;
