import React from "react";

export const CreateAccountButton = ({setRegisterForm, registerForm, text}) => {
	const validForm = () => {
		setRegisterForm(registerForm.map((element) => {
			if (element.name === 'firstName' || element.name === 'lastName') {
				if (element.value.length > 5) {
					return {
						...element,
						valid: true,
						validMessage: '',
					}
				} else {
					return {
						...element,
						valid: false,
						validMessage: 'мало букав',
					}
				}
			}
			if (element.name === 'firstName') {
				if (element.value.length > 5) {
					return {
						...element,
						valid: true,
						validMessage: '',
					}
				} else {
					return {
						...element,
						valid: false,
						validMessage: 'мало букав',
					}
				}
			}
			if (element.name === 'firstName') {
				if (element.value.length > 5) {
					return {
						...element,
						valid: true,
						validMessage: '',
					}
				} else {
					return {
						...element,
						valid: false,
						validMessage: 'мало букав',
					}
				}
			}
			if (element.name === 'firstName') {
				if (element.value.length > 5) {
					return {
						...element,
						valid: true,
						validMessage: '',
					}
				} else {
					return {
						...element,
						valid: false,
						validMessage: 'мало букав',
					}
				}
			}
			return element
		}))
	}
	return (
		<div
			className='createAccount'
			onClick={validForm}
		>
			{text}
		</div>
	)
}