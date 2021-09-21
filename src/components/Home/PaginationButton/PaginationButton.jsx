import React from "react";
import './PaginationButton.scss';
import { useState } from 'react';

export const PaginationButton = ({name, articles, setNextArticle}) => {
	const [start, setStart] = useState(0)
	const [end,setEnd] = useState(3)
	const handleNextArticle = () => {
		setStart(start + 3)
		setEnd(end + 3)
		const nextArticle = articles.slice(start,end)
		setNextArticle((prevState) => ([
			...nextArticle,
		]))
	}

	return (
		<div 
		className='paginationButton'
		onClick={handleNextArticle}
		>
			{name}
		</div>
	)
}