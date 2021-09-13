import React, {useState} from 'react';

import './SignIn.scss';
import {CreateAccountButton} from "../Login/CreateAccountButton/CreateAccountButton";

export const SignIn = () => {
	const [firstName, SetFirstName] = useState()
	const [lastName, SetlastName] = useState()
	const [email, Setemail] = useState()
	const [password, Setpassword] = useState()
	const onChange = (e) => (SetFirstName(e.target.value))
	console.log(firstName)
	return (
		<div className='content login'>
			<form className='signinForm'>
				<div className='title'>
					Create your free account
				</div>
				<div className='inputLogin'>
					<div className='name'>
						First name
					</div>
					<input
						name='firstName'
						type='text'
						value={firstName}
						onChange={onChange}
					/>
				</div>
				<div className='inputLogin'>
					<div className='name'>
						Last name
					</div>
					<input
						name='lastName'
						type='text'
						value={lastName}
					/>
				</div>
				<div className='inputLogin'>
					<div className='name'>
						Email Address
					</div>
					<input
						name='email'
						type='email'
						value={email}
					/>
				</div>
				<div className='inputLogin'>
					<div className='name'>
						Password
					</div>
					<input
						name='password'
						type='password'
						value={password}
					/>
				</div>
					<CreateAccountButton
						text={'Create Account'}
						firstName={firstName}
						lastName={lastName}
						email={email}
						password={password}
					/>
			</form>
		</div>
	)
}