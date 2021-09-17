import React from "react";
import {NavLink} from "react-router-dom";

export const UserArticle = ({dataArticle}) => {
	console.log('===>dataArticle', dataArticle);
	return (
		<div className='articles my'>
			<img src={dataArticle.pictureSrc} alt={dataArticle.namePicture}/>
			<div className='infoArticle my'>
				<div className='hashTag my'>
					{dataArticle.hasTag}
				</div>
				<NavLink
					className='nameArticle my'
					to={`/article_page${dataArticle.id}`}
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