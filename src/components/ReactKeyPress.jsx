import React, { useState } from 'react';
import ReactKeyPressItem from './ReactKeyPressItem';
import '../css/ReactKeyPress.css';
import { KeyPressitemArr } from '../constants/ReactKeyPressConstant';

export const ReactKeyPress = ({ firstKey, secondKey, callback }) => {
	const [keyPressItems, setKeyPressItems] = useState(KeyPressitemArr);


	const handleUnMount = () => {
		const newItems = [...keyPressItems];
		newItems[3].active = false;
		setKeyPressItems(newItems);
	}

	return (
		<div className='main-container'>
			<div className='react-key-press'>
				{
					keyPressItems.map((item, i) => {
						return <ReactKeyPressItem firstKey={firstKey} secondKey={secondKey} callback={callback} item={item} />
					})
				}
			</div>
			<div className='show-shortcuts'>
				{
					keyPressItems.map((item, i) => {
						return item.active && <div>
							{`Click ${item.name} or Press ${firstKey} ${secondKey} to toggle ${item.name}`}
						</div>
					})
				}
			</div>
			<div>
				<button className='unmount-btn' onClick={handleUnMount}>
					Unmount D
				</button>
			</div>
		</div>
	)
}
