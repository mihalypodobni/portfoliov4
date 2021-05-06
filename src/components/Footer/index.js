import React from 'react'
import {FaInstagram,
    FaGithub,
    FaTumblr,
    FaVimeo,
    FaLinkedin} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrapper,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements'


const Footer = ()=> {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>
                            Made by Mihaly Podobni in 2021
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank"> <FaInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank"> <FaGithub/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank"> <FaTumblr/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank"> <FaVimeo/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank"> <FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
