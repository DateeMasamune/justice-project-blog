import React, {useEffect, useState} from 'react';
import axios from "axios";

import {UserAvatar} from "./UserAvatar/UserAvatar";
import {UserArticle} from "./UserArticle/UserArticle";
import {PaginationButton} from "../Home/PaginationButton/PaginationButton";

import './MyArticles.scss';
import {articlesData} from "../../services/mock";
import {user} from "../../services/mock";

export const MyArticles = () => {
	const userLog = JSON.parse(localStorage.getItem('users')) || [{
		email: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
		firstName: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
		lastName: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
		password: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
	}]
	// const id = JSON.parse(localStorage.getItem('id')) || ''
	// const iUser = userLog.filter(item => item.firstName.id === id)
	// const [profileInfo, setProfileInfo] = useState(...iUser)
	// const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')) || articlesData);
	// const myArticles = articles.filter((item) =>  +item.userCreate === id)
	const [getUser, setGetUser] = useState([])
	const [myArticleMongo, setMyArticleMongo] = useState([])

	/*получить пользователя*/
	useEffect(()=>{
		axios.post(
			'http://localhost:5000/api/articles/get_user',
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res)=>{
				console.log('===>res', res);
				setGetUser([res.data])
			})
			.catch((error)=>{
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
			.then((res)=>{
				console.log('===>res', res);
				setMyArticleMongo(res.data)
			})
			.catch((error)=>{
				console.log('===>error', error);
			})
		/*получить мои статьи*/
	},[])
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
								<PaginationButton name={'Prev'} />
								<PaginationButton name={'Next'} />
							</div>
					}

				</div>
			</div>
		</div>
	)
}