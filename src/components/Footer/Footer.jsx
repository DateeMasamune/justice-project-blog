import React from "react";
import Logo from '../../assets/img/LogoFooter.png'
import './Footer.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                    <Router className='footerLogo'>
                        <Link to='/'><img src={Logo} alt='Logo.png'/></Link>
                    </Router>
                    <div>
                        <Router className='buttonBlock'>
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
                        </Router>
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