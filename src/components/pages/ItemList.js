import React, { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';

const ItemList = ({ department }) => {
	const [items, setItems] = useState([]);

	async function getProducts() {
		try {
			const response = await axios.get('http://localhost:5000/product');
			setItems(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className='ItemList'>
			{items !== [] ? (
				items.map((item) => <Item key={item._id} item={item} />)
			) : (
				<h4>No Items To Show</h4>
			)}
			}
		</div>
	);
};

export default ItemList;
