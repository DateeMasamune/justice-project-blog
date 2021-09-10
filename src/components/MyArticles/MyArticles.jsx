import React from 'react';

import './MyArticles.scss';
import {photo} from "../images";
import {user} from "../images";

export const MyArticles = () => {
	return (
		<div className='container'>
			<div className='content myArticles'>
				{
					user.map(item => (
						<div className='user'>
							<div className='rame'></div>
							<div className='iconUser'>
								<img src={item.imageSrc} alt={item.name}/>
							</div>
							<div className='textBlockUser'>
								<span>
								{item.name}
							</span>
								<span>
								{item.discription}
							</span>
							</div>
						</div>
					))
				}
				<div className='articlesList'>
					{
						photo.map(item => (
							<div className='articles my'>
								<img src={item.pictureSrc} alt={item.name}/>
								<div className='infoArticle my'>
									<div className='hashTag my'>
										{item.hasTag}
									</div>
									<div className='nameArticle my'>
										{item.nameArticle}
									</div>
									<div className='discriptionArticle my'>
										{item.description}
									</div>
									<div className='userInfo my'>
										<div className='iconUser my'>
											<img src={item.iconSrc} alt={item.name}/>
										</div>
										<div className='dataArticle my'>
											<img src={item.date} alt={item.name}/>
										</div>
										<div className='viewArticle my'>
											<img src={item.viewSrc} alt={item.name}/>
											<span className='num'>{item.viewNum}</span>
										</div>
									</div>
								</div>
							</div>
						))
					}
					<div className='paginationArticle'>
						<div className='paginationButton'>Prev</div>
						<div className='paginationButton'>Next</div>
					</div>
				</div>
			</div>
		</div>
	)
}