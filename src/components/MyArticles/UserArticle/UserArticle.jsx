import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import plug from '../../../assets/img/plug/photodraw.ru-87434.jpg';
import axios from "axios";

export const UserArticle = ({dataArticle}) => {

	const image = dataArticle.pictureSrc.split('/')
	const [user, setUser] = useState([])
	const [imageSrc, setImage] = useState('')

	useEffect(() => {
		axios.post(
			`http://localhost:5000/api/articles/get_user/${dataArticle.userCreate}`,
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res) => {
				console.log('===>resUserArticleList', res);
				setUser(res.data)
			})
			.catch((error) => {
				console.log('===>error', error);
			})
	}, [])

	useEffect(() => {
		if (user.avatar !== undefined) {
			const image = user.avatar.split('/')
			setImage(image)
		}
	}, [user])

	return (
		<div className='articles my'>
			{dataArticle.pictureSrc
				?
				<img src={`http://localhost:5000/${image[image.length - 1]}`} alt={dataArticle.namePicture}/>
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
						<img src={`http://localhost:5000/${imageSrc[imageSrc.length - 1]}`} alt={dataArticle.namePicture}/>
						<span>
							{user.firstName}
						</span>
					</div>
					<div className='dataArticle my'>
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