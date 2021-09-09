import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/img/Logo.png'
import  './Header.scss';

const Header = () => {

    const logIn = 'Log in'
    const signIn = 'Sign in'
    const logOut = 'Logout'
    const allArticles = 'All articles'
    const myArticles = 'My articles'
    const addArticles = 'Add articles'
    const profile = 'Profile'
    const user = true

   return (
       <header>
           <Navbar bg="light topMenu" expand="lg" >
               <Container>
                   <Navbar.Brand href="#">
                       <img src={Logo}/>
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                       {
                           !user ?
                           <Nav className="me-auto">
                               <Nav.Link href="#">{logIn}</Nav.Link>
                               <Nav.Link href="#">{signIn}</Nav.Link>
                            </Nav>
                               :
                           <Nav className="me-auto">
                               <div className='menuItem'>{allArticles}</div>
                               <div className='menuItem'>{myArticles}</div>
                               <div className='menuItem'>{addArticles}</div>
                               <div className='menuItem'>{profile}</div>
                               <Nav.Link href="#">{logOut}</Nav.Link>
                           </Nav>
                       }

                   </Navbar.Collapse>
               </Container>
           </Navbar>
       </header>
   )
}

export default Header;