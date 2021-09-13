import React from "react";

export const UserAvatar = ({userData}) => {
	return (
		<div className='user'>
			<div className='rame'></div>
			<div className='iconUser'>
				<img src={userData.imageSrc} alt={userData.namePicture}/>
			</div>
			<div className='textBlockUser'>
				<span>
					{userData.name}
				</span>
				<span>
					{userData.discription}
				</span>
			</div>
		</div>
	)
}