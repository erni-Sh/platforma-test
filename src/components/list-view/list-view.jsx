import React from 'react';
import data from '../../assets/data.json';

export default function ListView() {
	console.log(data);

	return (
		<>
			{data.map((figure) =>
				<div style={{
					backgroundColor: figure.color,
					filter:`${figure.dark ? 'brightness(50%)' : 'brightness(85%)'}`
				}}>
					{figure.form}
				</div>
			)}
		</>
	)
}
