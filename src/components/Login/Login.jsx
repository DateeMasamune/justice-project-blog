import React, {useState} from 'react';

import './Login.scss';
import {useHistory} from "react-router-dom";

export const Login = () => {
	const history = useHistory();

	const [loginForm, setLoginForm] = useState({
		email: {
			value: '',
			name: 'email',
			text: 'Email Address',
			type: 'email'
		},
		password: {
			value: '',
			name: 'password',
			text: 'Password',
			type: 'password'
		}
	})
	const getUsersLocalStor = () => {
		console.log(JSON.parse(localStorage.getItem('users')))
		const localUsers = JSON.parse(localStorage.getItem('users'))
		if (localUsers === null) {
			return false
		} else {
			localUsers.forEach(curVal => {
				if (loginForm.email.value === curVal.email.value) {
					if (loginForm.password.value === curVal.password.value) {
						localStorage.setItem('login', JSON.stringify(true))
						history.push('/');
						window.location.reload()
					} else {
						console.log("пароли не совпали")
					}
				} else {
					console.log('email не найден')
				}
			})
		}
	}
	const getValueInput = (e) => {
		const {value, name} = e.target
		setLoginForm(prevState => ({
			...prevState,
			[name]: {
				...prevState[name],
				value
			}
		}))
	}
	console.log(loginForm)
	return (
		<div className='content login'>
			<form>
				<div className='title'>
					Log in to your account
				</div>
				{
					Object.keys(loginForm).map((field) => {
						return (
							<div className='inputLogin'>
								<div className='name'>
									{loginForm[field].text}
								</div>
								<input
									name={loginForm[field].name}
									type={loginForm[field].type}
									onChange={getValueInput}
								/>
							</div>
						)
					})
				}
				<div
					className='createAccount'
					onClick={getUsersLocalStor}
				>
					Create Account
				</div>
				<span>
					Don’t have a Times account? <a href='#'>Create one</a>
				</span>
			</form>
		</div>
	)
}