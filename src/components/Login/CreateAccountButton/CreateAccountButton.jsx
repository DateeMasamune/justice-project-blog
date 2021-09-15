import React from "react";

export const CreateAccountButton = ({setRegisterForm, registerForm, text}) => {
	const validForm = () => {
<<<<<<< HEAD
		let registerFormToArray = Object.entries(registerForm)
		console.log(registerFormToArray)
		registerFormToArray.map(element => {
			if (element[0] === "firstName" || element[0] === "lastName") {
				if (element[1].value.length < 4 || element[1].value === ''){
					element[1].valid = false
				} else {
					element[1].valid = true
				}
			}
		})
		let registerFormToObject = Object.fromEntries(registerFormToArray)
		console.log(registerFormToObject)
		setRegisterForm(registerFormToObject)
		// setRegisterForm(Object.keys(registerForm).map((element) => { /*используем метод для преобразования объекта в массив */
		// 	if (registerForm[element].name === 'firstName' || registerForm[element].name === 'lastName') {
		// 		console.log(1111)
		// 		// if (registerForm[element].value.length > 5) {
		// 		// 	return {
		// 		// 		...element,
		// 		// 		valid: true,
		// 		// 		validMessage: '',
		// 		// 	}
		// 		// } else {
		// 		// 	return {
		// 		// 		...element,
		// 		// 		valid: false,
		// 		// 		validMessage: 'мало букав',
		// 		// 	}
		// 		// }
		// 	}
		// 	return {} /*полученный новый массив снова преобразуем в объект*/
=======

			let registerFormToArray = Object.entries(registerForm) /*преобразуем в массив*/
			registerFormToArray.map(element => {
				if (element[0] === "firstName" || element[0] === "lastName") {
					if (element[1].value.length < 4 || element[1].value === ''){
						element[1].valid = false
					} else {
						element[1].valid = true
					}
				}
			})
			let registerFormToObject = Object.fromEntries(registerFormToArray) /*преобразуем обратно в объект*/
			setRegisterForm(registerFormToObject) /*устанавливаем новое состояние*/


		// setRegisterForm(registerForm.map((element) => {
		// 	if (element.name === 'firstName' || element.name === 'lastName') {
		// 		if (element.value.length > 5) {
		// 			return {
		// 				...element,
		// 				valid: true,
		// 				validMessage: '',
		// 			}
		// 		} else {
		// 			return {
		// 				...element,
		// 				valid: false,
		// 				validMessage: 'мало букав',
		// 			}
		// 		}
		// 	}
		// 	return element
>>>>>>> b6f07572e8a2c92c5315978009e3812d03d8b54b
		// }))
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