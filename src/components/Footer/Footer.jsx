import React from "react";
import {Link} from "react-router-dom";

import Logo from '../../assets/img/LogoFooter.png'
import './Footer.scss';

const Footer = (props) => {

	const user = props.user
	const text = [
		'© 2021 Justice-it. All rights reserved.',
		'© 2021 Justice-team. All rights reserved.',
	]
	const buttons = [
		{
			name: 'Log in',
			link: '/login',
		},
		{
			name: 'Sign in',
			link: '/signin',
		},
		{
			name: 'Logout',
			link: '/logout',
		},
	]
	return (
		<footer>
			<div className='container'>
				<div className='blockOne'>
					<div className='footerLogo'>
						<Link to='/'><img src={Logo} alt='Logo.png'/></Link>
					</div>
					<div>
						<div className='buttonBlock'>
							{
								buttons.map(button => {
									if (user) {
										if (button.name === 'Logout') {
											return (
												<Link to={button.link} className='button'>{button.name}</Link>
											)
										}
									} else {
										if (button.name !== 'Logout') {
											return (
												<Link to={button.link} className='button'>{button.name}</Link>
											)
										}
									}
								})
							}
						</div>
					</div>
				</div>
				<div className='blockTwo'>
					{text.map(item => (
						<div className='text'>{item}</div>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer;