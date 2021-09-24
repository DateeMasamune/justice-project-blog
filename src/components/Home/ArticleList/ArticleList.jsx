import React, {useEffect, useState} from "react";

import {NavLink} from "react-router-dom";

import plug from '../../../assets/img/plug/photodraw.ru-87434.jpg';

export const ArticleList = (props) => {

	const {data} = props;
	const [article, setArticle] = useState(data)

	useEffect(() => {
		setArticle(data)
	}, [props])

	const image = article.pictureSrc.split('/')

	return (
		<div className='articles'>
			{
				article.pictureSrc ?

					<img className='pictureUser' src={`http://localhost:5000/${image[image.length-1]}`} alt={article.namePicture}/>
					:
					<div className='flexFix'>
						<img className='plugImg' src={plug} alt={plug}/>
					</div>
			}

			<div className='infoArticle'>
				<div className='hashTag'>
					{article.hasTag}
				</div>
				<NavLink
					className='linkArticle'
					to={`/article_page${article._id}`}
					exact={true}
				>
					<div
						className='nameArticle'
					>
						{article.nameArticle}
					</div>
				</NavLink>
				<div
					className='discriptionArticle'
					dangerouslySetInnerHTML={{__html: `${article.description}`}}
				>
				</div>
				<div className='userInfo'>
					<div className='iconUser'>
						<img src={article.iconSrc} alt={article.namePicture}/>
						<span>
							{article.nameUser}
						</span>
					</div>
					<div className='dataArticle'>
						{article.date}
					</div>
					<div className='viewArticle'>
						<img src={article.viewSrc} alt={article.namePicture}/>
						<span className='num'>{article.viewNum}</span>
					</div>
				</div>
			</div>
		</div>
	)
}