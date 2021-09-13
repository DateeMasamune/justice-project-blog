import React from 'react';

import './Login.scss';
import {CreateAccountButton} from "./CreateAccountButton/CreateAccountButton";

export const Login = () => {
	return (
		<div className='content login'>
			<form>
				<div className='title'>
					Log in to your account
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
				<span>
					Don’t have a Times account? <a href='#'>Create one</a>
				</span>
			</form>
		</div>
	)
}