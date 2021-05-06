import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SiderbarMenu,
    SidebarLink,

} from './SideBarElements'

function SideBar({isOpen, toggle}) {
    return (
<SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
    <SidebarWrapper>
        <SiderbarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
            <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
        </SiderbarMenu>
    </SidebarWrapper>
</SidebarContainer>
    )
}

export default SideBar
