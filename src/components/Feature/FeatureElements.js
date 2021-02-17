import styled from 'styled-components'
import Imgbg from '../../images/pizza5.jpg'



export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)), 
    url(${Imgbg});
    background-position: center;
    background-size: cover;
`;

export const FeatureCard = styled.div`
    padding: 3rem;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 700px){
        margin-left: 0px;
    }
`;

export const FeatureTitle = styled.h2`
    color: #fff;
    font-size: 3rem;
`;

export const FeatureDesc = styled.div`
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

export const FeatureButton = styled.button`
    padding: .7rem 2rem;
    background-color: orange;
    border: 1px solid black;
    color: #000;
    cursor: pointer;
    &:hover{
        background-color:#b20016;
        color: #fff;
    };
    transition: 300ms;
`;