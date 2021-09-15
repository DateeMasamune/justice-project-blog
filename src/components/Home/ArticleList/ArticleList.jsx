import React, {useEffect, useState} from "react";

import {NavLink} from "react-router-dom";

export const ArticleList = (props) => {
	const {data} = props;
	const [article, setArticle] = useState(data)
	
	return (
		<div className='articles'>
			<img src={article.pictureSrc} alt={article.namePicture}/>
			<div className='infoArticle'>
				<div className='hashTag'>
					{article.hasTag}
				</div>
				<NavLink
					className='linkArticle'
					to={`/article_page${article.id}`}
					exact={true}
				>
					<div className='nameArticle'>
						{article.nameArticle}
					</div>
				</NavLink>
				<div className='discriptionArticle'>
					{article.description}
				</div>
				<div className='userInfo'>
					<div className='iconUser'>
						<img src={article.iconSrc} alt={article.namePicture}/>
						<span>
							{article.nameUser}
						</span>
					</div>
					<div className='dataArticle'>
						<img src={article.date} alt={article.namePicture}/>
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