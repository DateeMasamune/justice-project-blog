import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

// imp components

import './Header.scss';
import Logo from '../../assets/img/Logo.png'

const Header = (props) => {
	const user = props.user
	const navElemWithoutAuth = [
		{
			name: 'Log in',
			link: '/login'
		},
		{
			name: 'Sign in',
			link: '/signin'
		},
	]
	const navElemAuth = [
		{
			name: 'All articles',
			link: '/'
		},
		{
			name: 'My articles',
			link: '/my_articles'
		},
		{
			name: 'Add articles',
			link: '/add_articles'
		},
		{
			name: 'Profile',
			link: '/profile'
		},
		{
			name: 'Logout',
			type: 'button',
			link: '/logout'
		},
	]


	return (
		<header>
			<Navbar bg="light topMenu" expand="lg">
				<Container>
					<NavLink to='/'>
						<img src={Logo} alt='Logo.png'/>
					</NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						{
							!user ?
								<div className="me-auto">
									{navElemWithoutAuth.map(elem => (
										<NavLink
											activeClassName="selectedButton"
											className='nav-link'
											exact={true}
											to={elem.link}
										>
											{elem.name}
										</NavLink>
									))}
								</div>
								:
								<div className="me-auto">
									{
										navElemAuth.map(element => {
											if (element.type === 'button') {
												return (
													<NavLink
														activeClassName="selectedButton"
														exact={true}
														className='nav-link'
														to={element.link}
													>
														{element.name}
													</NavLink>
												)
											} else {
												return (
													<NavLink
														activeClassName="selected"
														exact={true}
														className='menuItem'
														to={element.link}
													>
														{element.name}
													</NavLink>
												)
											}
										})
									}
								</div>
						}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header;