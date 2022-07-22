import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import {useSelector} from "react-redux";
import '../../styles/list-view.scss';

export default function ListView() {
	// const data = await axios.get(`https://erni-sh.github.io/platforma-test/public/data.json`);
	const [figuresData, setFiguresData] = useState();

	useEffect(() => {
		const apiUrl = 'https://erni-sh.github.io/platforma-test/public/data.json';
		axios.get(apiUrl).then((resp) => {
			setFiguresData(resp.data);
		});
	}, [setFiguresData]);

	const activeForms = useSelector(state => state.forms);
	const activeColors = useSelector(state => state.colors);
	const activeBrightness = useSelector(state => state.brightness);
	const activeColumns = useSelector(state => state.columns);
	const activeFilters = useSelector(state => state.filters);
	console.log(activeFilters);
	// console.log(data);
	return (
		<div className="list_view">
			{figuresData?.map((figure) => {
				if(!activeForms.includes(figure.form)) return false;
				if(!activeColors.includes(figure.color)) return false;
				if(activeBrightness.includes('dark') && !figure.dark) return false;
				if(activeBrightness.includes('light') && figure.dark) return false;

				return (
					<div key={nanoid()} style={{width: `${100 / activeColumns}%` }}>
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
