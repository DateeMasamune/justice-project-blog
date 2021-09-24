import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

import {UserAvatar} from "./UserAvatar/UserAvatar";
import {UserArticle} from "./UserArticle/UserArticle";
import {PaginationButton} from "../Home/PaginationButton/PaginationButton";

import './MyArticles.scss';

export const MyArticles = () => {

	const [getUser, setGetUser] = useState([])
	const [myArticleMongo, setMyArticleMongo] = useState([])
	const history = useHistory()

	useEffect(()=>{
		if (!JSON.parse(localStorage.getItem('login'))) {
			history.push('/signin')
			document.location.reload();
		}
	},[])

	/*получить пользователя*/
	useEffect(() => {
		axios.post(
			'http://localhost:5000/api/articles/get_user',
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res) => {
				console.log('===>res', res);
				setGetUser([res.data])
			})
			.catch((error) => {
				console.log('===>error', error);
			})
		/*получить мои статьи*/
		axios.get(
			'http://localhost:5000/api/articles',
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res) => {
				console.log('===>res', res);
				setMyArticleMongo(res.data)
			})
			.catch((error) => {
				console.log('===>error', error);
			})
		/*получить мои статьи*/
	}, [])
	/*получить пользователя*/


	return (
		<div className='container'>
			<div className='content myArticles'>
				{
					getUser.map(item => (
						<UserAvatar
							userData={item}
						/>
					))
				}
				<div className='articlesList'>
					{
						myArticleMongo.map(item => (
							<UserArticle dataArticle={item}/>
						))
					}
					{
						myArticleMongo.length <= 0 ?
							<div className='noData'>
								Записей еще нет...
							</div>
							:
							<div className='paginationArticle'>
								<PaginationButton name={'Prev'}/>
								<PaginationButton name={'Next'}/>
							</div>
					}
				</div>
			</div>
		</div>
	)
}