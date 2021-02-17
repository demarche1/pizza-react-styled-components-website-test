import React from 'react'
import { Nav, NavIcon, NavLink } from './NavbarElements'

export default ({toggle}) => {
    return(            
        <Nav>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <i className="fas fa-pizza-slice"></i>
            </NavIcon>
        </Nav>  
    )
}