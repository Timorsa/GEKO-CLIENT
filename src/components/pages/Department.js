import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

import { MdSort } from 'react-icons/md/index';

const Department = () => {
	let { department } = useParams();
	if (!department) {
		department = 'home';
	}
	return (
		<div className='department'>
			<h2 className='headline primary-fnt'>{department.toUpperCase()}</h2>
			<ul className='dep-nav secondary-fnt'>
				<li className='dep-nav-btn'>
					<MdSort />
					Sort
				</li>
				<li className='dep-nav-btn'>Product Type</li>
				<li className='dep-nav-btn'>Style</li>
				<li className='dep-nav-btn'>Size</li>
				<li className='dep-nav-btn'>Colour</li>
				<li className='dep-nav-btn'>Price</li>
			</ul>
			<div className='sort primary-fnt'>
				<label>
					<input type='radio' class='radio' name='example' />
					Price high to low
				</label>
				<label>
					<input type='radio' class=' radio' name='example' />
					price low to high
				</label>
				<label>
					<input type='radio' class=' radio' name='example' />
					What's new
				</label>
			</div>
			<ItemList department={department} />
		</div>
	);
};

export default Department;
