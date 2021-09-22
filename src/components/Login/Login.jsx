import React, {useState} from 'react';
import axios from "axios";

import './Login.scss';
import {useHistory} from "react-router-dom";


export const Login = (prop) => {
	const history = useHistory();
	const [error, setError] = useState(false)
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

	const getUsersLocalStore = () => {
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
						// window.location.reload()
						setLoginForm((prevState) => ({
							...prevState,
							password: {
								...prevState.password,
								valid: true
							}
						}))
						localStorage.setItem('id', JSON.stringify(curVal.firstName.id))
						setError(false)

						/*запрос пользователя на сервер*/
						axios.post('http://localhost:5000/api/auth/login', {
							email: loginForm.email.value,
							password: loginForm.password.value
						}).then((res)=>{
							console.log('===>res', res);
							localStorage.setItem('token', JSON.stringify(res.data.token));
						}).catch((error)=>{
							console.log('===>error', error);
						})
						/*запрос пользователя на сервер*/

					} else {
						console.log("пароли не совпали")
						setError(true)
					}
				} else {
					console.log('email не найден')
					setError(true)
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
									name={loginForm[field].name}
									type={loginForm[field].type}
									onChange={getValueInput}
								/>
							</div>
						)
					})
				}
				{error && <p style={{color: 'red'}}>Не верный email или пароль</p>}
				<div
					className='createAccount'
					onClick={getUsersLocalStore}
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