import React, {useEffect, useState} from "react";
import axios from "axios";

import {user} from "../../services/mock";
import {dontUser} from "../../services/mock";
import {ButtonProfile, SaveChange} from "./ButtonProfile/ButtonProfile";
import './Profile.scss';
import noPhoto from "../../assets/img/nophoto.png"
import FormData from "form-data";

export const Profile = () => {

	// const userLog = JSON.parse(localStorage.getItem('users')) || [{
	// 	email: {
	// 		displayName: "",
	// 		id: '',
	// 		name: "",
	// 		type: "",
	// 		valid: '',
	// 		validMessage: "",
	// 		value: "",
	// 	},
	// 	firstName: {
	// 		displayName: "",
	// 		id: '',
	// 		name: "",
	// 		type: "",
	// 		valid: '',
	// 		validMessage: "",
	// 		value: "",
	// 	},
	// 	lastName: {
	// 		displayName: "",
	// 		id: '',
	// 		name: "",
	// 		type: "",
	// 		valid: '',
	// 		validMessage: "",
	// 		value: "",
	// 	},
	// 	password: {
	// 		displayName: "",
	// 		id: '',
	// 		name: "",
	// 		type: "",
	// 		valid: '',
	// 		validMessage: "",
	// 		value: "",
	// 	},
	// }]
	// const id = JSON.parse(localStorage.getItem('id')) || ''
	// const iUser = userLog.filter(item => item.firstName.id === id)
	// const [profileInfo, setProfileInfo] = useState(...iUser)
	const [getUser, setGetUser] = useState([])
	const handleChange = (e) => {
		const {name, value} = e.target
		setGetUser((prevState) => ({
			...prevState,
			[name]: value
		}))
	}
	const emptyObj = getUser.description === undefined
	const changeData = () => {
		// const changeUser = userLog.map(obj => {
		// 	if (obj.firstName.id === id) {
		// 		return profileInfo
		// 	} else {
		// 		return obj;
		// 	}
		// });
		// localStorage.setItem('users', JSON.stringify(changeUser))
		// console.log(changeUser)
		/*запрос на изменение данных*/

			axios.patch(
				`http://localhost:5000/api/profile/update/${getUser._id}`,
				{
					firstName: getUser.firstName,
					lastName: getUser.lastName,
					description: getUser.description
				},
				{
					headers: {
						"Authorization": JSON.parse(localStorage.getItem('token'))
					}
				})
				.then((res)=>{
					console.log(res)
				})
				.catch((error)=>{
					console.log(error)
				})
		/*запрос на изменение данных*/
	}

	/*получить пользователя*/
	useEffect(()=>{
		axios.post(
			'http://localhost:5000/api/articles/get_user',
			{},
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			}
		)
			.then((res)=>{
				console.log('===>res', res);
				setGetUser(res.data)
			})
			.catch((error)=>{
				console.log('===>error', error);
			})
	},[])
	/*получить пользователя*/

	/*change photo*/
	const formDataAvatar = new FormData();
	const [file, setFile] = useState(null)

	const sendToServer = () => {
		formDataAvatar.append('image',file)
		axios.patch(
			`http://localhost:5000/api/profile/update_avatar/${getUser._id}`,
			formDataAvatar,
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			})
			.then((res)=>{
				console.log(res)
			})
			.catch((error)=>{
				console.log(error)
			})
	}

	const getFileAvatar = (e) => {
			const file = e.target.files[0]
			setFile(e.target.files[0])
			console.log('===>file', file);
	}
	/*change photo*/

	/*delete avatar*/
	const deleteAvatar = () => {
		axios.patch(
			`http://localhost:5000/api/profile/delete_avatar/${getUser._id}`,
			formDataAvatar,
			{
				headers: {
					"Authorization": JSON.parse(localStorage.getItem('token'))
				}
			})
			.then((res)=>{
				console.log(res)
			})
			.catch((error)=>{
				console.log(error)
			})
	}
	/*delete avatar*/

	return (
		<div className="container">
			<div className="content profile">
				<div className="title profile">
					<h1>Profile</h1>
				</div>
				<div className="block profile">
					{
							<div className='user'>
								<div className='rame'></div>
								{
									// userLog ?
										<div className='iconUser'>
											<img src={getUser.avatar ? getUser.avatar : noPhoto} alt={getUser.namePicture ? getUser.namePicture : 'picture' }/>
										</div>
										// :
										// <div className='iconUser'>
										// 	<div className='dontUser'>
										// 		<img src={dontUser[0].imageSrc} alt=""/>
										// 	</div>
										// </div>
								}
								<div className='textBlockUser'>
									{/*<ButtonProfile*/}
									{/*	text="Change*/}
									{/*	photo" id='1'*/}
									{/*	getUserId={getUser._id}*/}
									{/*/>*/}
									<div
										className="button"
										onClick={sendToServer}
									>
										<input
											type='file'
											onChange={getFileAvatar}
										/>
										Change
									</div>
									<div
										className="button"
										onClick={deleteAvatar}
									>
										Delete photo
									</div>
								</div>
							</div>
					}
					<div className="formUser">
						<form>
							<div className="inputName">
								<div className="block">
									<span>First name</span>
									<input
										type="text"
										name="firstName"
										value={getUser.firstName}
										onChange={handleChange}
									/>
								</div>
								<div className="block">
									<span>Last name</span>
									<input
										name="lastName"
										type="text"
										value={getUser.lastName}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="inputDescription">
								<div className="block">
									<span>Description</span>
									<input
										name='description'
										value={emptyObj ? '' : getUser.description}
										type="text"
										onChange={handleChange}
									/>
								</div>
							</div>
							<SaveChange
								text={'Save Changes'}
								changeData={changeData}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}