import React from 'react';

import './Home.scss';
import {photo} from "../images";
import {popularBlock} from "../images";

export const Home = () => {
	const title = 'Popular articles'
	return (
		<div className='content'>
			<div className='container'>
				<div className='popularArticles main'>
					{
						popularBlock.map(item => (
							<div className='articles'>
								<img src={item.pictureSrc} alt={item.namePicture}/>
								<div className='infoArticle'>
									<div className='hashTag'>
										{item.hasTag}
									</div>
									<div className='nameArticle'>
										{item.nameArticle}
									</div>
									<div className='discriptionArticle'>
										{item.description}
									</div>
									<div className='userInfo main'>
										<div className='iconUser'>
											<img src={item.iconSrc} alt={item.namePicture}/>
											<span>
												{item.nameUser}
											</span>
										</div>
										<div className='dataArticle'>
											<img src={item.date} alt={item.namePicture}/>
										</div>
										<div className='viewArticle'>
											<img src={item.viewSrc} alt={item.namePicture}/>
											<span className='num'>{item.viewNum}</span>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
				<div className='popularArticles'>
					<h1>{title}</h1>
					{
						photo.map(item => (
							<div className='articles'>
								<img src={item.pictureSrc} alt={item.namePicture}/>
								<div className='infoArticle'>
									<div className='hashTag'>
										{item.hasTag}
									</div>
									<div className='nameArticle'>
										{item.nameArticle}
									</div>
									<div className='discriptionArticle'>
										{item.description}
									</div>
									<div className='userInfo'>
										<div className='iconUser'>
											<img src={item.iconSrc} alt={item.namePicture}/>
											<span>
												{item.nameUser}
											</span>
										</div>
										<div className='dataArticle'>
											<img src={item.date} alt={item.namePicture}/>
										</div>
										<div className='viewArticle'>
											<img src={item.viewSrc} alt={item.namePicture}/>
											<span className='num'>{item.viewNum}</span>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
				<div className='paginationArticle'>
					<div className='paginationButton'>Prev</div>
					<div className='paginationButton'>Next</div>
				</div>
			</div>
		</div>
	)
}
