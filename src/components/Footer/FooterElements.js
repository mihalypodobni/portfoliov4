import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #FFF;
`

export const FooterWrapper = styled.div`
    display: flex;
    max-width: 1100px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 24px;
    margin: 0 auto;
`



export const SocialMedia = styled.section`
    max-width:1000px;
    width:100%;
`

export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
    margin:40px auto 0 auto;

    @media screen and (max-width:820px){
        flex-direction:column;
}`

export const SocialLogo = styled(Link)`
    color:#000;
    justify-self:start;
    cursor:pointer;
    text-decoration: none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-bottom:15px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #000;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
export const SocialIconLink = styled.a`
    color: #000;
    font-size:24px;
`
