import {React} from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileMenu,
    NavMenu,
    NavItem,
    NavLinks,
} from './NavbarElements';

function Navbar({toggle}) {

    //Smooth scroll
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

//Structure
return (
    <>
        <IconContext.Provider value={{color:'#000'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to="/"> 
                        MIHALY PODOBNI 
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <MobileMenu >
                        <FaBars onClick={toggle}/>
                    </MobileMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
)
}

export default Navbar
