import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: transparent;
    font-weight: 900;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;   
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 125%);
    }

    i{
        font-size: 2rem;
        transform: translate(-60%, 2%)
    }
`;