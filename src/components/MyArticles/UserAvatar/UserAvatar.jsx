import React, {useEffect, useState} from "react";
import noPhoto from "../../../assets/img/nophoto.png"

export const UserAvatar = ({userData}) => {

	const [image,setImage] = useState('')

	useEffect(()=>{
		if (userData.avatar === undefined) {
			return
		} else {
			const imageSrc = userData.avatar.split('/')
			setImage(imageSrc)
			console.log('===>image111111', imageSrc);
		}
	},[userData])

	return (
		<div className='user'>
			<div className='rame'></div>
			<div className='iconUser'>
				<img src={userData.avatar ? `http://localhost:5000/${image[image.length-1]}` : noPhoto} alt={userData.namePicture ? userData.namePicture : 'picture'}/>
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