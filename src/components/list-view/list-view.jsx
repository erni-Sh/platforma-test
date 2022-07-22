import React from 'react';
import data from '../../assets/data.json';
import {useSelector} from "react-redux";
import '../../styles/list-view.scss';

export default function ListView() {
	const activeForms = useSelector(state => state.forms);
	const activeColors = useSelector(state => state.colors);
	const activeBrightness = useSelector(state => state.brightness);
	const activeColumns = useSelector(state => state.columns);

	// console.log(activeColumns);
	// console.log(data);
	return (
		<div className="list_view">
			{data.map((figure) => {
				if(!activeForms.includes(figure.form)) return false;
				if(!activeColors.includes(figure.color)) return false;
				if(activeBrightness.includes('dark') && !figure.dark) return false;
				if(activeBrightness.includes('light') && figure.dark) return false;

				return (
					<div style={{width: `${100 / activeColumns}%` }}>
						<div className={`figure ${figure.form}`} style={{
							maxWidth: '100px',
							backgroundColor: figure.color,
							filter:`${figure.dark ? 'brightness(50%)' : 'brightness(85%)'}`
						}}>
						</div>
					</div>
				)}
			)}
		</div>
	)
}
