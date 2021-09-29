import React, {useEffect, useState} from "react";
import axios from "axios";

import {NavLink, useHistory, useParams} from "react-router-dom";

import './ArticlePage.scss';
import plug from '../../assets/img/plug/photodraw.ru-87434.jpg';

export const ArticlePage = () => {

	const {id} = useParams()
	const [pageArticle, setPageArticle] = useState([])
	const [imageSrc, setImageSrc] = useState('')
	const history = useHistory()
	const [user,setUser] = useState({})
	const [avatar,setAvatar] = useState('')

	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('login'))) {
			history.push('/signin')
			document.location.reload();
		}
	}, [])

	useEffect(() => {
		axios.get(
			`http://localhost:5000/api/articles/${id}`,
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			})
			.then((res) => {
				console.log('===>res', res.data);
				setPageArticle(res.data)
			})
			.catch((error) => {
				console.log('===>error', error);
			})
	}, [])

	useEffect(() => {
		axios.patch(
			`http://localhost:5000/api/articles/add/${id}`,
			{
				viewNum: pageArticle.viewNum
			},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
	}, [pageArticle])

	useEffect(() => {
		axios.post(
			`http://localhost:5000/api/articles/get_user/${pageArticle.userCreate
			}`,
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res)=>{
				console.log('===>resUser', res);
				setUser(res.data)
			})
			.catch((error)=>{
				console.log('===>error', error);
			})
	}, [pageArticle])

	useEffect(() => {
		if (pageArticle.pictureSrc === undefined) {
			return
		} else {
			const image = pageArticle.pictureSrc.split('/')
			setImageSrc(image)
		}
	}, [pageArticle])

	useEffect(() => {
		if (user.avatar === undefined) {
			return
		} else {
			const avatar = user.avatar.split('/')
			setAvatar(avatar)
		}
	}, [user])

	return (
		<div className='container'>
			<div className='content page'>
				<NavLink to='/' className='button'>
					All articles
				</NavLink>
				<div className='article'>
					<div className='articles page'>
						<div className='hashTag page'>
							{pageArticle.hasTag}
						</div>
						<div className='nameArticle page'>
							{pageArticle.nameArticle}
						</div>
						{
							pageArticle.pictureSrc
								?
								<img className='pic' src={`http://localhost:5000/${imageSrc[imageSrc.length - 1]}`}
										 alt={pageArticle.namePicture}/>
								:
								<img className='pic' src={plug} alt={pageArticle.namePicture}/>
						}
						<div className='infoArticle page'>
							<div className='discriptionArticle page'>
								<div
									className="textPage"
									dangerouslySetInnerHTML={{__html: `${pageArticle.description}`}}
								/>
							</div>
							<div className="flexUser">
								<div className='userInfo page'>
									<div className='iconUser page'>
										<img className="iconImg" src={`http://localhost:5000/${avatar[avatar.length - 1]}`} alt={avatar.namePicture}/>
										<span>
										{pageArticle.nameUser}
									</span>
									</div>
									<div className='dataArticle page'>
										{pageArticle.date}
									</div>
									<div className='viewArticle page'>
										<img src={pageArticle.viewSrc} alt={pageArticle.namePicture}/>
										<span className='num'>{pageArticle.viewNum}</span>
									</div>
								</div>
								<div className="button unset">
									Typography
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}