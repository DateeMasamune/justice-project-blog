import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/img/Logo.png'
import './Header.scss';
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";

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
						<Link to='/'>
							<img src={Logo} alt='Logo.png'/>
						</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						{
							!user ?
								<div className="me-auto">
									{navElemWithoutAuth.map(elem => (
										<Link className='nav-link' to={elem.link}>{elem.name}</Link>
									))}
								</div>
								:
								<div className="me-auto">
									{
										navElemAuth.map(element => {
											if (element.type === 'button') {
												return (
													<Link
														className='nav-link'
														to={element.link}
													>
														{element.name}
													</Link>
												)
											} else {
												return (
													<Link className='menuItem' to={element.link}>{element.name}</Link>
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