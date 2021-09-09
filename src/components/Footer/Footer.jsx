import React from "react";
import Logo from '../../assets/img/LogoFooter.png'
import  './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='blockOne'>
                    <div className='footerLogo'>
                        <img src={Logo} alt=''/>
                    </div>
                    <div className='buttonBlock'>
                        <div className='logIn'>
                            Log in
                        </div>
                        <div className='signIn'>
                            Sign in
                        </div>
                    </div>
                </div>
                <div className='blockTwo'></div>
            </div>
        </footer>
    )
}

export default Footer;