import React from "react";

export const ButtonProfile = ({text}) => {
	return (
		<div className="button">
			{text}
		</div>
	)
}

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