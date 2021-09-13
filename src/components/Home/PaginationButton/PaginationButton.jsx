import React from "react";

import './PaginationButton.scss';

export const PaginationButton = ({name}) => {
	return (
		<div className='paginationButton'>
			{name}
		</div>
	)
}