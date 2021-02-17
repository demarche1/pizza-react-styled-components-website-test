import React from 'react'
import { SidebarContainer,IconContainer,SidebarNav, SidebarLink,SideBtnWrap} from './SidebarElements'

export default ({isOpen,toggle}) => {
    
    return (
        <SidebarContainer isOpen={isOpen}>
            <IconContainer onClick={toggle}>
                <i className="fas fa-times"></i>
            </IconContainer>
            <SidebarNav>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/menu'>Full Menu</SidebarLink>
            </SidebarNav>
            <SideBtnWrap to='/'>Order Now</SideBtnWrap>
        </SidebarContainer>
    )
}