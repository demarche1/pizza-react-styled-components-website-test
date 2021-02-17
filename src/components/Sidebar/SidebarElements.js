import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    top:0;
    width: 60%;
    height: 100%;
    background: #ffc500;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in;
    right: ${({isOpen}) => isOpen ? '0' : '-10000px' };
    @media screen and (max-width: 419px){
        width: 100%;
    }
    @media screen and (min-width: 1000px){
        width: 30%;
    }

`;

export const IconContainer = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
    margin-top: 1rem;
    cursor: pointer;
`;

export const SidebarNav = styled.nav`
    display: flex;
    width: 100%;
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    
`;

export const SidebarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: 900;
    letter-spacing: 3px;
    &:hover{
        color: #a70010;
    }
    transition: 0.3s;
`;

export const SideBtnWrap = styled.button`
    margin-top: 2rem;
    padding: .7rem 2.2rem;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    background-color: #a80009;
    border: .5px solid black;
    cursor: pointer;
    &:hover{
        transform: translateY(-20%)
    }
    transition: 0.3s;
`;