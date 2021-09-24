import React, {useEffect, useState} from "react";
import axios from "axios";

import {NavLink, useParams} from "react-router-dom";

import './ArticlePage.scss';
import plug from '../../assets/img/plug/photodraw.ru-87434.jpg';

export const ArticlePage = () => {
	const {id} = useParams()
	const [pageArticle, setPageArticle] = useState([])
	const [imageSrc, setImageSrc] = useState('')
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
			.then((res)=>{
				console.log('===>res', res);
			})
			.catch((error)=>{
				console.log('===>error', error);
			})
	},[])

	useEffect(()=>{
		axios.patch(
			`http://localhost:5000/api/articles/add/${id}`,
			{
				viewNum: pageArticle.viewNum
			},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
	},[pageArticle])
	
	useEffect(()=>{
		if (pageArticle.pictureSrc === undefined) {
			return
		} else {
			const image = pageArticle.pictureSrc.split('/')
			setImageSrc(image)
		}
	},[pageArticle])
	
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
						{
							pageArticle.pictureSrc
								?
								<img className='pic' src={`http://localhost:5000/${imageSrc[imageSrc.length-1]}`} alt={pageArticle.namePicture}/>
								:
								<img className='pic' src={plug} alt={pageArticle.namePicture}/>
						}
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