import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md/index';

const Item = ({ item }) => {
	console.log(item);
	const { images, title, description, price, brand } = item;
	console.log(images, title, price);
	return (
		<div
			className='item'
			style={{
				backgroundImage: 'url(' + `${images[0]}` + ')',
			}}>
			<div className='overlay'>
				<div className='title secondary-fnt'>{title}</div>
				<div className='price primary-fnt'>{price}$</div>
				<div className='black-btn secondary-fnt'> + Add to cart</div>
				<div className='black-btn secondary-fnt'>Product Page</div>
			</div>
			<div className='wishlist'>
				<MdFavoriteBorder />
			</div>
		</div>
	);
};

export default Item;
