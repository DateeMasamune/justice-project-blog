import React from 'react';

import './SignIn.scss';
import {CreateAccountButton} from "../Login/CreateAccountButton/CreateAccountButton";

export const SignIn = () => {
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
					<input type='text'/>
				</div>
				<div className='inputLogin'>
					<div className='name'>
						Last name
					</div>
					<input type='text'/>
				</div>
				<div className='inputLogin'>
					<div className='name'>
						Email Address
					</div>
					<input type='text'/>
				</div>
				<div className='inputLogin'>
					<div className='name'>
						Password
					</div>
					<input type='text'/>
				</div>
					<CreateAccountButton text={'Create Account'} />
			</form>
		</div>
	)
}