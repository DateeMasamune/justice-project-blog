import React, {useState} from 'react';

import './Home.scss';
import {PopularArticle} from "./PopularArticle/PopularArticle";
import {ArticleList} from "./ArticleList/ArticleList";
import {PaginationButton} from "./PaginationButton/PaginationButton";
import {articlesData} from "../../services/mock";

export const Home = () => {
	const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')) || articlesData); /*проверка для предотвращения ошибки в случае если нет данных*/
	const popularArticles = articles.sort((a, b) => b.viewNum - a.viewNum)[0] /*фильтрация по количеству просмотров*/
	const title = 'Popular articles'
	return (
		<div className='content'>
			<div className='container'>
				<div className='popularArticles main'>
					<PopularArticle data={popularArticles}/>
				</div>
				<div className='popularArticles'>
					<h1>{title}</h1>
					{
						articles.map(item => (
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
