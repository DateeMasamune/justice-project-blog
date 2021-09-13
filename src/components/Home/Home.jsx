import React from 'react';

import './Home.scss';
import {photo} from "../images";
import {popularBlock} from "../images";
import {PopularArticle} from "./PopularArticle/PopularArticle";
import {ArticleList} from "./ArticleList/ArticleList";
import {PaginationButton} from "./PaginationButton/PaginationButton";

export const Home = () => {
	const title = 'Popular articles'
	return (
		<div className='content'>
			<div className='container'>
				<div className='popularArticles main'>
					{
						popularBlock.map(item => (
							<PopularArticle data={item}/>
						))
					}
				</div>
				<div className='popularArticles'>
					<h1>{title}</h1>
					{
						photo.map(item => (
							<ArticleList data={item}/>
						))
					}
				</div>
				<div className='paginationArticle'>
					<PaginationButton name={'Prev'}/>
					<PaginationButton name={'Next'}/>
				</div>
			</div>
		</div>
	)
}
