import React, {useState} from "react";
import axios from "axios";
import FormData from "form-data";

export const SaveChange = ({text, changeData}) => {
	return (
		<div
			className="button"
			onClick={changeData}
		>
			{text}
		</div>
	)
}