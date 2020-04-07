import React, { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';

const ItemList = ({ department }) => {
	const [items, setItems] = useState([]);

	async function getProducts() {
		try {
			const response = await axios.get('https://localhost:5000/product');
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div className='ItemList'>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</div>
	);
};

export default ItemList;
