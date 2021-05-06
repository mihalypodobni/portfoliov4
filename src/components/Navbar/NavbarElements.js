import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background: #FFF;
    height: 80px;
    margin-top:-80px;
    position: sticky;
    top:0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    z-index:3;

    @media screen and (max-width:960){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;

    height:80px;
    width: 100%;
    max-width:1100px;
    z-index:1;
`

export const NavLogo = styled(LinkRouter)`
    display:flex;
    justify-self: flex-start;
    margin-left: 24px;
    align-items:center;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5 rem;
    cursor: pointer;
`
export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 786px){
        height: auto;
        margin-right: 24px;
        display: flex;
        justify-content:center;
        align-items:center;
        font-size: 1.8 rem;
        color:#000;
        transform: traslate(-100%, 60%);
        cursor: pointer;

    }
`

export const FaBars = styled.div`
    margin-right: 24px;
    cursor: pointer;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items:center;
    list-style:none;
    text-align:center;

    @media screen and (max-width: 786px){
        display: none;
    }
`

export const NavItem = styled.li`

    &:hover{
        text-decoration: line-through;
    }
`

export const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items:center;
    padding: 0 1rem;
    height: 100%;
    text-decoration:none;
    color:#000;
    cursor:pointer;
    
    &.active{
        text-decoration: line-through;
    }
`
