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
			type: 'email',
			valid: false
		},
		password: {
			value: '',
			name: 'password',
			text: 'Password',
			type: 'password',
			valid: false
		}
	})

	const getUsersLocalStor = () => {
		const localUsers = JSON.parse(localStorage.getItem('users'))
		if (localUsers === null) {
			return false
		} else {
			localUsers.forEach(curVal => {
				if (loginForm.email.value === curVal.email.value) {
					setLoginForm((prevState) => ({
						...prevState,
							email: {
								...prevState.email,
								valid: true
							}
					}))
					if (loginForm.password.value === curVal.password.value) {
						localStorage.setItem('login', JSON.stringify(true))
						history.push('/');
						window.location.reload()
						setLoginForm((prevState) => ({
							...prevState,
							password: {
								...prevState.password,
								valid: true
							}
						}))
						localStorage.setItem('id', JSON.stringify(curVal.firstName.id))
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
		getUsersLocalStor()
		setLoginForm(prevState => ({
			...prevState,
			[name]: {
				...prevState[name],
				value,
			}
		}))
	}
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
									style={(!loginForm[field].valid && loginForm[field].value !== '') ? {borderColor: 'red'} : {}}
									name={loginForm[field].name}
									type={loginForm[field].type}
									onChange={getValueInput}
								/>
								{
									(!loginForm[field].valid && loginForm[field].value !== '')  && (
										<p className='errorLogin'>invalid data</p>
									)
								}
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