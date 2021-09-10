import React from "react";

import './ArticlePage.scss';
import {photo} from "../images";

export const ArticlePage = () => {
	return (
		<div className='container'>
			<div className='content page'>
				<div className='button'>
					All articles
				</div>
				<div className='article'>
					<div className='articles page'>
						<div className='hashTag page'>
							{photo[0].hasTag}
						</div>
						<div className='nameArticle page'>
							{photo[0].nameArticle}
						</div>
						<img className='pic' src={photo[0].pictureSrc} alt={photo[0].namePicture}/>
						<div className='infoArticle page'>
							<div className='discriptionArticle page'>
								{photo[0].description}
							</div>
							<div className='userInfo page'>
								<div className='iconUser page'>
									<img src={photo[0].iconSrc} alt={photo[0].namePicture}/>
									<span>
												{photo[0].nameUser}
											</span>
								</div>
								<div className='dataArticle page'>
									<img src={photo[0].date} alt={photo[0].namePicture}/>
								</div>
								<div className='viewArticle page'>
									<img src={photo[0].viewSrc} alt={photo[0].namePicture}/>
									<span className='num'>{photo[0].viewNum}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}