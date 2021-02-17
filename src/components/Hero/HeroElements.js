import styled from 'styled-components'
import Imgbg from '../../images/pizza-3.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)), 
    url(${Imgbg});
    height: 100vh;
    background-position: center;
    background-size: cover;
    margin-top: -80px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 748px){
        justify-content: center;
    }
`;

export const HeroItems = styled.div`
    margin-left: 15%;
    color: #fff;
    font-size: 2rem;
    @media screen and (max-width: 748px){
        margin-left: 0rem;
    }
    @media screen and (max-width: 380px){
        font-size: 1.5rem;
        margin: 10px;
    }
`; 


export const HeroH1 = styled.h1`
    line-height: 90%;
    border-bottom: 4px orange solid;
    letter-spacing: 3px;
`;


export const HeroP = styled.p`
    font-weight: 900;
`;

export const HeroBtn = styled.button`
    padding: .7rem 2.2rem;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    background-color: #a80009;
    border: .5px solid black;
    cursor: pointer;
    outline: none;
    &:hover{
        transform: translateY(-10%)
    }
    transition: 0.5s;
`;