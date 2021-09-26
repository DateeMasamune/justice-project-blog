import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

import './SignIn.scss';


export const SignIn = () => {
	const history = useHistory()
	const [successMsg, setSuccessMsg] = useState('')
	const [showErrors, setShowErrors] = useState(false)
	const [registerForm, setRegisterForm] = useState({
		firstName: {
			value: '',
			valid: false,
			displayName: 'First name',
			name: 'firstName',
			type: 'text',
		},
		lastName: {
			value: '',
			valid: false,
			name: 'lastName',
			displayName: 'Last name',
			type: 'text',
		},
		email: {
			value: '',
			valid: false,
			displayName: 'Email Address',
			name: 'email',
			type: 'email',
		},
		password: {
			value: '',
			name: 'password',
			valid: false,
			displayName: 'Password',
			type: 'password',
		},
	})

	useEffect(()=>{
		if (JSON.parse(localStorage.getItem('login'))) {
			history.push('/')
		}
	},[])

	const isValid = (value, name) => {
		switch (name) {
			case 'firstName':
				return value.length > 3
			case 'lastName':
				return value.length > 3
			case 'email':
				const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(value).toLowerCase());
			case 'password':
				return value.length > 6
			default:
				return false
		}
	}

	const onChange = (e) => {
		showErrors && setShowErrors(false)
		const {value, name} = e.target;
		setRegisterForm((prevState) => ({
			...prevState,
			[name]: {
				...prevState[name],
				validMessage: '',
				value: value,
				valid: isValid(value, name),
				id: Date.now(),
				description: '',
			}
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setShowErrors(true)
		let isValidAll = true;
		for (let elem in registerForm) {
			if (!elem.valid) {
				isValidAll = false
			}
		}
		if (registerForm.email.valid &&

			registerForm.firstName.valid &&
			registerForm.lastName.valid &&
			registerForm.password.valid) {
			setSuccessMsg('Create User')


			/*запись в базу данных*/
			axios.post('http://localhost:5000/api/auth/register', {
				email: registerForm.email.value,
				password: registerForm.password.value,
				firstName: registerForm.firstName.value,
				lastName: registerForm.lastName.value,
				avatar: ''
			}).then((res) => {
				console.log('===>res', res);
			}).catch((error) => {
				console.log('===>error', error);
			})
			/*запись в базу данных*/
		}
	}

	return (
		<div className='content login'>
			<form className='signinForm'>
				<div className='title'>
					Create your free account
				</div>
				{Object.keys(registerForm).map((field) => {
					return (
						<div className='inputLogin'>
							<div className='name'>
								{registerForm[field].displayName}
							</div>
							<input
								style={(!registerForm[field].valid && registerForm[field].value) ? {borderColor: 'red'} : {}}
								name={registerForm[field].name}
								type={registerForm[field].type}
								value={successMsg ? '' : registerForm[field].value}
								onChange={onChange}
							/>
							{showErrors && !registerForm[field].valid && (
								<p className='errorSign'>Enter correct data</p>)} {
						}
						</div>
					)
				})}
				{
					successMsg && (
						<p className='successUser'>{successMsg}</p>
					)
				}
				<div
					className='createAccount'
					onClick={handleSubmit}
				>
					Create Account
				</div>
			</form>
		</div>
	)
}