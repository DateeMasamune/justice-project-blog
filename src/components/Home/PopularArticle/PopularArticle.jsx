import React, {useEffect, useState} from "react";

import {NavLink} from "react-router-dom";

import plug from '../../../assets/img/plug/photodraw.ru-87434.jpg';
import axios from "axios";

export const PopularArticle = ({data}) => {

	const image = data.pictureSrc.split('/')
	const [user, setUser] = useState([])
	const [imageSrc, setImage] = useState('')

	useEffect(() => {
		axios.post(
			`http://localhost:5000/api/articles/get_user/${data.userCreate}`,
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res) => {
				console.log('===>res', res);
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
			console.log('===>image', image);
		}
	}, [user])

	return (
		<div className='articles'>
			{
				data.pictureSrc
					?
					<img className='popularImage' src={`http://localhost:5000/${image[image.length - 1]}`}
							 alt={data.namePicture}/>
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
						<img src={`http://localhost:5000/${imageSrc[imageSrc.length - 1]}`} alt={data.namePicture}/>
						<span>
							{user.firstName}
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