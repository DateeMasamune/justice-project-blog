import React from "react";
import {NavLink} from "react-router-dom";

import plug from '../../../assets/img/plug/photodraw.ru-87434.jpg';

export const UserArticle = ({dataArticle}) => {
	const image = dataArticle.pictureSrc.split('/')
	return (
		<div className='articles my'>
			{dataArticle.pictureSrc
				?
				<img src={`http://localhost:5000/${image[image.length-1]}`} alt={dataArticle.namePicture}/>
				:
				<img src={plug} alt={dataArticle.namePicture}/>
			}

			<div className='infoArticle my'>
				<div className='hashTag my'>
					{dataArticle.hasTag}
				</div>
				<NavLink
					className='nameArticle my'
					to={`/article_page${dataArticle._id}`}
				>
					{dataArticle.nameArticle}
				</NavLink>
				<div
					className='discriptionArticle my'
					dangerouslySetInnerHTML={{__html: `${dataArticle.description}`}}
				/>
				<div className='userInfo my'>
					<div className='iconUser my'>
						<img src={dataArticle.iconSrc} alt={dataArticle.namePicture}/>
						<span>
							{dataArticle.nameUser}
						</span>
					</div>
					<div className='dataArticle my'>
						{/*<img src={dataArticle.date} alt={dataArticle.namePicture}/>*/}
						{dataArticle.date}
					</div>
					<div className='viewArticle my'>
						<img src={dataArticle.viewSrc} alt={dataArticle.namePicture}/>
						<span className='num'>{dataArticle.viewNum}</span>
					</div>
				</div>
			</div>
		</div>
	)
}