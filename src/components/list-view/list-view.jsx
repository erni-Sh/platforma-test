import React from 'react';
import data from '../../assets/data.json';
import {useSelector} from "react-redux";

export default function ListView() {
	const activeForms = useSelector(state => state.forms);
	const activeColors = useSelector(state => state.colors);
	const activeBrightness = useSelector(state => state.brightness);

	console.log(activeBrightness);
	console.log(data);
	return (
		<>
			{data.map((figure) => {
				if(!activeForms.includes(figure.form)) return false;
				if(!activeColors.includes(figure.color)) return false;
				if(activeBrightness.includes('dark') && !figure.dark) return false;
				if(activeBrightness.includes('light') && figure.dark) return false;

				return (<div style={{
					backgroundColor: figure.color,
					filter:`${figure.dark ? 'brightness(50%)' : 'brightness(85%)'}`
				}}>
					{figure.form}
				</div>)
				}
			)}
		</>
	)
}
