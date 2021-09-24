import React from "react";

import {NavLink} from "react-router-dom";

import plug from '../../../assets/img/plug/photodraw.ru-87434.jpg';

export const PopularArticle = ({data}) => {

	const image = data.pictureSrc.split('/')

	return (
		<div className='articles'>
			{
				data.pictureSrc
				?
				<img className='popularImage' src={`http://localhost:5000/${image[image.length-1]}`} alt={data.namePicture}/>
				:
				<img className='popularImage' src={plug} alt={data.namePicture}/>
			}
			<div className='infoArticle'>
				<div className='hashTag'>
					{data.hasTag}
				</div>
				<NavLink className='linkArticle' to={`/article_page${data._id}`}>
					<div className='nameArticle'>
						{data.nameArticle}
					</div>
				</NavLink>
				<div
					className='discriptionArticle'
					dangerouslySetInnerHTML={{__html: `${data.description}`}}
				/>
				<div className='userInfo main'>
					<div className='iconUser'>
						<img src={data.iconSrc} alt={data.namePicture}/>
						<span>
							{data.nameUser}
						</span>
					</div>
					<div className='dataArticle'>
						{data.date}
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