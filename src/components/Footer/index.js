import React from 'react'
import logo from '../../images/pizzalogo.png'
import {FooterContainer,FooterLogo,SocialMediaContainer} from './FooterElements'


export default () => {
    return (
        <FooterContainer>
            <FooterLogo>
                <i class="fas fa-utensils"></i> 
            </FooterLogo>
            <SocialMediaContainer>
                <a href='https://facebook.com'>
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href='https://intagram.com'>
                    <i className="fab fa-instagram-square"></i>
                </a>
                <a href='https://web.whatsapp.com'>
                    <i className="fab fa-whatsapp-square"></i>
                </a>
            </SocialMediaContainer>
        </FooterContainer>
    )
}