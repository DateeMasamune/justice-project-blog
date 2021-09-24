import React, {useState} from 'react';
import axios from "axios";

import './Login.scss';
import {useHistory} from "react-router-dom";

export const Login = () => {

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
		/*запрос пользователя на сервер*/
		axios.post('http://localhost:5000/api/auth/login', {
			email: loginForm.email.value,
			password: loginForm.password.value
		}).then((res)=>{
			console.log('===>res', res);
			localStorage.setItem('token', JSON.stringify(res.data.token));
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
			setError(false)
		}).catch((error)=>{
			console.log('===>error', error);
			setError(true)
		})
		/*запрос пользователя на сервер*/
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
					Login
				</div>
				<span>
					Don’t have a Times account? <a href='#'>Create one</a>
				</span>
			</form>
		</div>
	)
}