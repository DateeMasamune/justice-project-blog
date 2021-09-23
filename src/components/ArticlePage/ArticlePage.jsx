import React, {useEffect, useState} from "react";
import axios from "axios";

import {NavLink, useParams} from "react-router-dom";

import './ArticlePage.scss';

export const ArticlePage = () => {
	const {id} = useParams()
	const [pageArticle, setPageArticle] = useState([])
	const articles = JSON.parse(localStorage.getItem('articles')) || [{
		date: "",
		description: "",
		hasTag: "",
		iconSrc: "",
		id: "",
		nameArticle: "",
		namePicture: "",
		nameUser: "",
		pictureSrc: "",
		viewNum: "",
		viewSrc: "",
	}]
	
	useEffect(()=>{
		axios.get(
			`http://localhost:5000/api/articles/${id}`,
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			})
			.then((res) => {
				console.log('===>res', res.data);
				setPageArticle(res.data)
			})
			.catch((error) => {
				console.log('===>error', error);
			})
		axios.patch(
			`http://localhost:5000/api/articles/${id}`,
			{
				viewNum: pageArticle.viewNum
			},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res)=>{
				console.log('===>res', res);
			})
			.catch((error)=>{
				console.log('===>error', error);
			})
	},[])
	
	const currentArticle = articles.filter(item => item.id === +id)
	return (
		<div className='container'>
			<div className='content page'>
				<NavLink to='/' className='button'>
					All articles
				</NavLink>
				<div className='article'>
					<div className='articles page'>
						<div className='hashTag page'>
							{pageArticle.hasTag}
						</div>
						<div className='nameArticle page'>
							{pageArticle.nameArticle}
						</div>
						<img className='pic' src={pageArticle.pictureSrc} alt={pageArticle.namePicture}/>
						<div className='infoArticle page'>
							<div className='discriptionArticle page'>
								<div
									className="textPage"
									dangerouslySetInnerHTML={{__html: `${pageArticle.description}`}}
								>
									{/*{currentArticle[0].description}*/}
								</div>

							</div>
							<div className="flexUser">
								<div className='userInfo page'>
									<div className='iconUser page'>
										<img className="iconImg" src={pageArticle.iconSrc} alt={pageArticle.namePicture}/>
										<span>
										{pageArticle.nameUser}
									</span>
									</div>
									<div className='dataArticle page'>
										{/*<img src={currentArticle[0].date} alt={currentArticle[0].namePicture}/>*/}
										{pageArticle.date}
									</div>
									<div className='viewArticle page'>
										<img src={pageArticle.viewSrc} alt={pageArticle.namePicture}/>
										<span className='num'>{pageArticle.viewNum}</span>
									</div>
								</div>
								<div className="button unset">
									Typography
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}