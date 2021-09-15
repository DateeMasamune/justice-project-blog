import React, {useState} from 'react';

import {UserAvatar} from "./UserAvatar/UserAvatar";
import {UserArticle} from "./UserArticle/UserArticle";
import {PaginationButton} from "../Home/PaginationButton/PaginationButton";

import './MyArticles.scss';
import {articlesData} from "../../services/mock";
import {user} from "../../services/mock";

export const MyArticles = () => {
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
	return (
		<div className='container'>
			<div className='content myArticles'>
				{
					user.map(item => (
						<UserAvatar
							userData={item}
							localUserData={profileInfo}
						/>
					))
				}
				<div className='articlesList'>
					{
						articlesData.map(item => (
							<UserArticle dataArticle={item}/>
						))
					}
					<div className='paginationArticle'>
						<PaginationButton name={'Prev'} />
						<PaginationButton name={'Next'} />
					</div>
				</div>
			</div>
		</div>
	)
}