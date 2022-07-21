import React from 'react';
import '../../styles/checkboxes.scss';

export default function FilterColor() {
	return (
		<>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"red"} />
				<label htmlFor={"red"}>Красные</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"green"}/>
				<label htmlFor={"green"}>Зеленые</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"blue"}/>
				<label htmlFor={"blue"}>Синие</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"yellow"}/>
				<label htmlFor={"yellow"}>Желтые</label>
			</div>

			<div>
				<input type={"radio"} id={"all"} name={"darkness"} />
				<label htmlFor={"all"}>Все</label>
			</div>
			<div>
				<input type={"radio"} id={"dark"} name={"darkness"} />
				<label htmlFor={"dark"}>тёмные</label>
			</div>
			<div>
				<input type={"radio"} id={"light"} name={"darkness"} />
				<label htmlFor={"light"}>светлые</label>
			</div>

			<label htmlFor={"columns"}>Колонки</label>
			<input type={"number"} id={"columns"} placeholder={4} max={4} min={1}/>
		</>
	)
}
