import React from 'react';
import '../../styles/checkboxes.scss';

import { useDispatch, useSelector } from 'react-redux';
import {changeFormsFilterAction} from "../../redux/actions/formsActions";

export default function FilterForm() {
	const dispatch = useDispatch();

	const changeCheckbox = () => {
		const checkedForms = [];
		const checkedBoxes = document.querySelectorAll('input[name=form]:checked');
		checkedBoxes.forEach((box) => checkedForms.push(box.value));
		dispatch(changeFormsFilterAction(checkedForms));
	}

	return (
		<>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"circle"} value={"circle"} name={"form"} onChange={changeCheckbox} defaultChecked/>
				<label htmlFor={"circle"}>Круги</label>
			</div>
			<div className={"checkbox-wrapper"} >
				<input type={"checkbox"} id={"square"} value={"square"} name={"form"} onChange={changeCheckbox} defaultChecked/>
				<label htmlFor={"square"}>Квадраты</label>
			</div>
		</>
	)
}
