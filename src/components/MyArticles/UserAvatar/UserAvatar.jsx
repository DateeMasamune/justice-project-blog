import React from "react";

export const UserAvatar = ({userData, localUserData}) => {
	return (
		<div className='user'>
			<div className='rame'></div>
			<div className='iconUser'>
				<img src={userData.imageSrc} alt={userData.namePicture}/>
			</div>
			<div className='textBlockUser'>
				<span>
					{localUserData.firstName.value ? localUserData.firstName.value : ''}
				</span>
				<span>
					{localUserData.description.value ? localUserData.description.value : ''}
				</span>
			</div>
		</div>
	)
}