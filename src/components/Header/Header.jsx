import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/img/Logo.png'
import './Header.scss';

const Header = () => {

    const navElemWithoutAuth = [
        {name: 'Log in'},
        {name: 'Sign in'},
    ]
    const navElemAuth = [
        {name: 'All articles'},
        {name: 'My articles'},
        {name: 'Add articles'},
        {name: 'Profile'},
        {name: 'Logout'},
    ]
    const user = true

    return (
        <header>
            <Navbar bg="light topMenu" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={Logo} alt=''/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            !user ?
                                <Nav className="me-auto">
                                    {navElemWithoutAuth.map(({name}) => (
                                        <div className='menuItem'>{name}</div>
                                    ))}
                                </Nav>
                                :
                                <Nav className="me-auto">
                                    {navElemAuth.map(({name}) => (
                                        <div className='menuItem'>{name}</div>
                                    ))}
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;