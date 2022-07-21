import React from 'react';
import '../../styles/checkboxes.scss';


export default function FilterForm() {
	return (
		<>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"circles"} />
				<label htmlFor={"circles"}>Круги</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"squares"} />
				<label htmlFor={"squares"}>Квадраты</label>
			</div>
		</>
	)
}
