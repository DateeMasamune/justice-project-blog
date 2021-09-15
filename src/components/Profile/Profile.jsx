import React, {useState} from "react";

import {user} from "../../services/mock";
import {dontUser} from "../../services/mock";
import './Profile.scss';
import {ButtonProfile, SaveChange} from "./ButtonProfile/ButtonProfile";
import {userTest} from "../../constants";

export const Profile = () => {
	const userLog = JSON.parse(localStorage.getItem('users')) || [{
		email: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
		firstName: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
		lastName: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
		password: {
			displayName: "",
			id: '',
			name: "",
			type: "",
			valid: '',
			validMessage: "",
			value: "",
		},
	}]
	const id = JSON.parse(localStorage.getItem('id')) || ''
	const iUser = userLog.filter(item => item.firstName.id === id)
	const [profileInfo, setProfileInfo] = useState(...iUser)
	const handleChange = (e) => {
		const {name, value} = e.target
		setProfileInfo((prevState) => ({
			...prevState,
			[name]: {
				...prevState[name],
				value,
				description: value,
			},
		}))
	}
	const changeData = () => {
		const changeUser = userLog.map(obj => {
			if (obj.firstName.id === id) {
				return profileInfo
			} else {
				return obj;
			}
		});
		localStorage.setItem('users', JSON.stringify(changeUser))
	}
	return (
		<div className="container">
			<div className="content profile">
				<div className="title profile">
					<h1>Profile</h1>
				</div>
				<div className="block profile">
					{
						user.map(item => (
							<div className='user'>
								<div className='rame'></div>
								{
									userLog ?
										<div className='iconUser'>
											<img src={item.imageSrc} alt={item.namePicture}/>
										</div>
										:
										<div className='iconUser'>
											<div className='dontUser'>
												<img src={dontUser[0].imageSrc} alt=""/>
											</div>
										</div>
								}
								<div className='textBlockUser'>
									<ButtonProfile text="Change photo"/>
									<ButtonProfile text="Delete photo"/>
								</div>
							</div>
						))
					}
					<div className="formUser">
						<form>
							<div className="inputName">
								<div className="block">
									<span>First name</span>
									<input
										type="text"
										name={profileInfo.firstName.name}
										value={profileInfo.firstName.value}
										onChange={handleChange}
									/>
								</div>
								<div className="block">
									<span>Last name</span>
									<input
										name={profileInfo.lastName.name}
										type="text"
										value={profileInfo.lastName.value}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="inputDescription">
								<div className="block">
									<span>Description</span>
									<input
										name={profileInfo.password.name}
										value={profileInfo.password.description}
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