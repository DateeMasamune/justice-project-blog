import React from "react";
import noPhoto from "../../../assets/img/nophoto.png"

export const UserAvatar = ({userData}) => {
	return (
		<div className='user'>
			<div className='rame'></div>
			<div className='iconUser'>
				<img src={userData.imageSrc ? userData.imageSrc : noPhoto} alt={userData.namePicture ? userData.namePicture : 'picture'}/>
			</div>
			<div className='textBlockUser'>
				<span>
					{userData.firstName ? userData.firstName : ''}
				</span>
				<span>
					{userData.hasOwnProperty("description")? userData.description : ''}
				</span>
			</div>
		</div>
	)
}