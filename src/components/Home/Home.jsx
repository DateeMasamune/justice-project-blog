import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

import {PopularArticle} from "./PopularArticle/PopularArticle";
import {ArticleList} from "./ArticleList/ArticleList";
import {PaginationButton} from "./PaginationButton/PaginationButton";

import './Home.scss';

export const Home = () => {

	const title = 'Popular articles'
	const [mongoArticles,setMongoArticles] = useState([])
	const popularArticles = mongoArticles.sort((a, b) => b.viewNum - a.viewNum)[0]
	const [start,setStart] = useState(0)
	const [end, setEnd] = useState(3)
	const [pagData, setPagData] = useState([])
	const history = useHistory()


	const handleNextPag = () => {
		if (end >= mongoArticles.length) {
			return
		}
		setStart(start + 3)
		setEnd(end + 3)
	}

	const handlePrevPag = () => {
		if (start) {
			setStart(start - 3)
			setEnd(end - 3)
		}
	}

	useEffect(()=>{
		if (!JSON.parse(localStorage.getItem('login'))) {
			history.push('/signin')
			document.location.reload();
		}
	},[])

	useEffect(()=>{
		setPagData(mongoArticles.slice(start,end))
	},[mongoArticles,end,start])

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
					mongoArticles.length > 0
						?
						<div>
							<div className='popularArticles main'>
								<PopularArticle
									data={popularArticles}
								/>
							</div>
							<div className='popularArticles'>
								<h1>{title}</h1>
								{
									pagData.map(item => {
										return(
											<ArticleList
												data={item}
											/>
										)
									})
								}
							</div>
							<div className='paginationArticle'>
								<PaginationButton
									name={'Prev'}
									onClick={handlePrevPag}
								/>
								<PaginationButton
								 name={'Next'}
								 onClick={handleNextPag}
								 />
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
