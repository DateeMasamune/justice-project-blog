import React, {useEffect, useState} from 'react';
import axios from "axios";

import {PopularArticle} from "./PopularArticle/PopularArticle";
import {ArticleList} from "./ArticleList/ArticleList";
import {PaginationButton} from "./PaginationButton/PaginationButton";

import {articlesData} from "../../services/mock";
import './Home.scss';


export const Home = () => {
	const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')) || articlesData);
	const [start, setStart] = useState(0)
	const [end,setEnd] = useState(3)
	const test = articles.slice(start,end)
	const popularArticles = articles.sort((a, b) => b.viewNum - a.viewNum)[0]
	const title = 'Popular articles'
	const [mongoArticles,setMongoArticles] = useState([])

	/*запрос на получение всех статей из БД*/
	useEffect(()=>{
		axios.post(
			'http://localhost:5000/api/articles/get_all',
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}})
			.then((res)=>{
				console.log('===>res', res);
				setMongoArticles(res.data)
			})
			.catch((error)=>{
				console.log('===>error', error);
			})
	},[])
	/*запрос на получение всех статей из БД*/

	return (
		<div className='content'>
			<div className='container'>
				{
					articles.length > 0
						?
						<div>
							<div className='popularArticles main'>
								<PopularArticle data={popularArticles}/>
							</div>
							<div className='popularArticles'>
								<h1>{title}</h1>
								{
									mongoArticles.map(item => (
										<ArticleList data={item}/>
									))
								}
							</div>
							<div className='paginationArticle'>
								<PaginationButton name={'Prev'}/>
								<PaginationButton name={'Next'}/>
							</div>
						</div>
						:
						<div className='noData'>
							Записей еще нет...
						</div>
				}
			</div>
		</div>
	)
}
