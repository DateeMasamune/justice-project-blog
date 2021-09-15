import React from "react";

import {NavLink, useParams} from "react-router-dom";

import './ArticlePage.scss';

export const ArticlePage = () => {
	const {id} = useParams()
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
							{currentArticle[0].hasTag}
						</div>
						<div className='nameArticle page'>
							{currentArticle[0].nameArticle}
						</div>
						<img className='pic' src={currentArticle[0].pictureSrc} alt={currentArticle[0].namePicture}/>
						<div className='infoArticle page'>
							<div className='discriptionArticle page'>
								<div className="textPage">
									{currentArticle[0].description}
								</div>

							</div>
							<div className="flexUser">
							<div className='userInfo page'>
								<div className='iconUser page'>
									<img className="iconImg" src={currentArticle[0].iconSrc} alt={currentArticle[0].namePicture}/>
									<span>
										{currentArticle[0].nameUser}
									</span>
								</div>
								<div className='dataArticle page'>
									<img src={currentArticle[0].date} alt={currentArticle[0].namePicture}/>
								</div>
								<div className='viewArticle page'>
									<img src={currentArticle[0].viewSrc} alt={currentArticle[0].namePicture}/>
									<span className='num'>{currentArticle[0].viewNum}</span>
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