import React from "react";
import './PaginationButton.scss';
import { useState } from 'react';

export const PaginationButton = ({name, onClick}) => {

	return (
		<div 
		className='paginationButton'
		onClick={onClick}
		>
			{name}
		</div>
	)
}