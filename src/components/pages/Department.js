import React from 'react';

import { MdSort } from 'react-icons/md/index';

const Department = () => {
	return (
		<div className='department'>
			<h2 className='headline primary-fnt'>Home</h2>
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
		</div>
	);
};

export default Department;
