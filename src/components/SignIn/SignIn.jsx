import React, {useState} from 'react';

import './SignIn.scss';
import {CreateAccountButton} from "../Login/CreateAccountButton/CreateAccountButton";


export const SignIn = () => {
	const [registerForm, setRegisterForm] = useState({
		firstName: {
			value: '',
			valid: false,
			validMessage: '',
			displayName: 'First name',
			name: 'firstName',
			type: 'text',
		},
		lastName: {
			value: '',
			valid: false,
			validMessage: '',
			name: 'lastName',
			displayName: 'Last name',
			type: 'text',
		},
		email: {
			value: '',
			valid: false,
			validMessage: '',
			displayName: 'Email Address',
			name: 'email',
			type: 'email',
		},
		password: {
			value: '',
			name: 'password',
			valid: false,
			validMessage: '',
			displayName: 'Password',
			type: 'password',
		},
	})

	// console.log('===>registerForm', registerForm);
	const onChange = (e) => { /*принимаем событие и имя поля для дальнейшей идентификации*/
		const {value, name} = e.target; /*в этой переменной хранится значения поля инпут*/
		// setRegisterForm(registerForm.map((element) => { /*делаем запись используя состояние компонента*/
		// 	if (element.name === name) { /*идентификация элемента в котором в данный момент происходит измненеие*/
		// 		return {
		// 			...element, /*возвращаем объект раскрываем объект по которому бежим с мап*/
		// 			validMessage: '',
		// 			value: value, /*обновляем значение поля*/
		// 		}
		// 	}
		// 	return element /*возвращаем объект с обновлненными значениями */
		// }))
			setRegisterForm((prevState) => ({
				...prevState,
				[name]: {
					...prevState[name],
					validMessage: '',
					value: value,
				}
			// if (element.name === name) {
			// 	return {
			// 		...element,
			// 		validMessage: '',
			// 		value: value,
			// 	}
			// }
		}))
	}
	// console.log('===>registerForm', registerForm);
	// console.log('===>Object.keys(registerForm)', Object.keys(registerForm));
	console.log(registerForm)
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
								style={(registerForm[field].validMessage) ? {borderColor: 'red'} : {}}
								name={registerForm[field].name}
								type={field.type}
								value={registerForm[field].value}
								onChange={onChange}
							/>
							{/*{!field.valid && field.value && (*/}
							{/*	<p style={{color: 'red'}}>{field.validMessage}</p>)} /!*если ошибка добавляем сообщение*!/*/}
						</div>
					)
				})}
				<CreateAccountButton
					text={'Create Account'}
					registerForm={registerForm}
					setRegisterForm={setRegisterForm}
				/>
			</form>
		</div>
	)
}