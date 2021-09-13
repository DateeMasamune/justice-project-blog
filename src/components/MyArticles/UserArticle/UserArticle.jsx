import React from "react";

export const UserArticle = ({dataArticle}) => {
	return (
		<div className='articles my'>
			<img src={dataArticle.pictureSrc} alt={dataArticle.namePicture}/>
			<div className='infoArticle my'>
				<div className='hashTag my'>
					{dataArticle.hasTag}
				</div>
				<div className='nameArticle my'>
					{dataArticle.nameArticle}
				</div>
				<div className='discriptionArticle my'>
					{dataArticle.description}
				</div>
				<div className='userInfo my'>
					<div className='iconUser my'>
						<img src={dataArticle.iconSrc} alt={dataArticle.namePicture}/>
						<span>
							{dataArticle.nameUser}
						</span>
					</div>
					<div className='dataArticle my'>
						<img src={dataArticle.date} alt={dataArticle.namePicture}/>
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