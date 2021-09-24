import React from "react";


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