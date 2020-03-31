import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md/index';

const Item = () => {
	return (
		<div
			className='item'
			style={{
				backgroundImage:
					'url(' +
					'https://i.ya-webdesign.com/images/converse-transparent-all-star-3.png' +
					')'
			}}>
			<div className='overlay'>
				<div className='title secondary-fnt'>Converse All Star Shoes</div>
				<div className='black-btn secondary-fnt'>Product Page</div>
			</div>
			<div className='wishlist'>
				<MdFavoriteBorder />
			</div>
		</div>
	);
};

export default Item;
