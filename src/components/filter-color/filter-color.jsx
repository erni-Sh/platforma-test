import React from 'react';
import '../../styles/checkboxes.scss';

import { useDispatch, useSelector } from 'react-redux';
import { changeColorsFilterAction } from "../../redux/actions/colorsActions";
import { changeBrightnessFilterAction } from "../../redux/actions/brightnessActions";
import { changeColumnsFilterAction } from "../../redux/actions/columnsActions";

export default function FilterColor() {
	const dispatch = useDispatch();

	const changeCheckboxColor = () => {
		const checkedColors = [];
		const checkedBoxes = document.querySelectorAll('input[name=color]:checked');
		checkedBoxes.forEach((box) => checkedColors.push(box.value));
		dispatch(changeColorsFilterAction(checkedColors));
	}

	const changeBrightness = () => {
		const checkedBrightness = [];
		const checkedBoxes = document.querySelectorAll('input[name=brightness]:checked');
		checkedBoxes.forEach((box) => checkedBrightness.push(box.value));
		dispatch(changeBrightnessFilterAction(checkedBrightness));
	}

	const changeColumns = () => {
		const checkedBoxes = document.querySelector('input[name=columns]');
		dispatch(changeColumnsFilterAction(checkedBoxes.value));
	}

	return (
		<>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"red"} value={"red"} name={"color"} onChange={changeCheckboxColor} defaultChecked />
				<label htmlFor={"red"}>Красные</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"green"} value={"green"} name={"color"} onChange={changeCheckboxColor} defaultChecked/>
				<label htmlFor={"green"}>Зеленые</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"blue"} value={"blue"} name={"color"} onChange={changeCheckboxColor} defaultChecked/>
				<label htmlFor={"blue"}>Синие</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"yellow"} value={"yellow"} name={"color"} onChange={changeCheckboxColor} defaultChecked/>
				<label htmlFor={"yellow"}>Желтые</label>
			</div>

			<div>
				<input type={"radio"} id={"all"} value={""} name={"brightness"} onChange={changeBrightness} defaultChecked />
				<label htmlFor={"all"}>Все</label>
			</div>
			<div>
				<input type={"radio"} id={"dark"} value={"dark"} name={"brightness"} onChange={changeBrightness} />
				<label htmlFor={"dark"}>тёмные</label>
			</div>
			<div>
				<input type={"radio"} id={"light"} value={"light"} name={"brightness"} onChange={changeBrightness} />
				<label htmlFor={"light"}>светлые</label>
			</div>

			<label htmlFor={"columns"}>Колонки</label>
			<input type={"number"} id={"columns"} placeholder={4} max={4} min={1} name={"columns"} onChange={changeColumns}/>
		</>
	)
}
