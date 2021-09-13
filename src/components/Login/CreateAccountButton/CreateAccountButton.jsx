import React from "react";

export const CreateAccountButton = (prop) => {
	console.log(prop)
	const test = () => {
		console.log(prop)
	}
	return (
		<div
			className='createAccount'
			onClick={test}
		>
			{prop.text}
		</div>
	)
}