import React from "react";

export const ArticleList = (prop) => {
	return (
		<div className='articles'>
			<img src={prop.data.pictureSrc} alt={prop.data.namePicture}/>
			<div className='infoArticle'>
				<div className='hashTag'>
					{prop.data.hasTag}
				</div>
				<div className='nameArticle'>
					{prop.data.nameArticle}
				</div>
				<div className='discriptionArticle'>
					{prop.data.description}
				</div>
				<div className='userInfo'>
					<div className='iconUser'>
						<img src={prop.data.iconSrc} alt={prop.data.namePicture}/>
						<span>
												{prop.data.nameUser}
											</span>
					</div>
					<div className='dataArticle'>
						<img src={prop.data.date} alt={prop.data.namePicture}/>
					</div>
					<div className='viewArticle'>
						<img src={prop.data.viewSrc} alt={prop.data.namePicture}/>
						<span className='num'>{prop.data.viewNum}</span>
					</div>
				</div>
			</div>
		</div>
	)
}