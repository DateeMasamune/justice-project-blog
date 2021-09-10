import React from 'react';

import './SignIn.scss';

export const SignIn = () => {
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
				<div className='createAccount'>
					Create Account
				</div>
				<span>
					Don’t have a Times account? <a href='#'>Create one</a>
				</span>
			</form>
		</div>
	)
}