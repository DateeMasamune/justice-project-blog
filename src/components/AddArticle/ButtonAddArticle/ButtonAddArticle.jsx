import React from "react";

import "./ButtonAddArticle.scss"

export const ButtonAddArticle = ({text}) => {
	return (
		<div className='button'>
			{text}
		</div>
	)
}