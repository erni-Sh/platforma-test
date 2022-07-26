import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import {useSelector} from "react-redux";
import '../../styles/list-view.scss';

export default function ListView() {
	const [figuresData, setFiguresData] = useState();

	useEffect(() => {
		const apiUrl = 'https://erni-sh.github.io/platforma-test/public/data.json';
		axios.get(apiUrl).then((resp) => {
			setFiguresData(resp.data);
		});
	}, [setFiguresData]);

	const activeFilters = useSelector(state => state.filters);

	return (
		<div className="list_view">
			{figuresData?.map((figure) => {
				if(!activeFilters.forms.includes(figure.form)) return false;
				if(!activeFilters.colors.includes(figure.color)) return false;
				if(activeFilters.brightness.includes('dark') && !figure.dark) return false;
				if(activeFilters.brightness.includes('light') && figure.dark) return false;

				return (
					<div key={nanoid()} style={{width: `${100 / activeFilters.columns}%` }}>
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
