import React from "react";

import {NavLink} from "react-router-dom";

export const PopularArticle = ({data}) => {
	return (
		<div className='articles'>
			<img src={data.pictureSrc} alt={data.namePicture}/>
			<div className='infoArticle'>
				<div className='hashTag'>
					{data.hasTag}
				</div>
				<NavLink className='linkArticle' to={`/article_page${data.id}`}>
					<div className='nameArticle'>
						{data.nameArticle}
					</div>
				</NavLink>
				<div className='discriptionArticle'>
					{data.description}
				</div>
				<div className='userInfo main'>
					<div className='iconUser'>
						<img src={data.iconSrc} alt={data.namePicture}/>
						<span>
							{data.nameUser}
						</span>
					</div>
					<div className='dataArticle'>
						<img src={data.date} alt={data.namePicture}/>
					</div>
					<div className='viewArticle'>
						<img src={data.viewSrc} alt={data.namePicture}/>
						<span className='num'>{data.viewNum}</span>
					</div>
				</div>
			</div>
		</div>
	)
}