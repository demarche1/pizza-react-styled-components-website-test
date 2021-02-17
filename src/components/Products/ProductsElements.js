import styled from 'styled-components'


export const ProductsContainer = styled.div`
    background: #160e0f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ProductsHeader = styled.h2`
    font-size: 2rem;
    color: #fff;
    font-weight: 900;
    margin-bottom: 7rem;
    margin-top: 3rem;
    text-align: center;
    @media screen and (max-width: 748px){
        margin-bottom: 3rem;
    }
`;
export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    justify-content: center;
`;
export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    margin-left: 2rem;
    @media screen and (max-width: 609px){
        margin-left: 0px;
    }
`;
export const ProductImg = styled.img`
    width: 300px;
    height: 300px;
    border-bottom: 3px solid orange;
    border-right: 4px solid orange;
`;
export const ProductInfo = styled.div`
    width: 200px;
    color: white;
    text-align: center; 
`;
export const ProductTitle = styled.h3`
    margin: 1rem 0;
`;
export const ProductDesc = styled.div`
    margin-bottom: 1rem;
    letter-spacing: 1px;
`;
export const ProductPrice = styled.div`
    font-size: 2rem;
`;
export const ProductButton = styled.button`
    padding: .7rem 1.5rem;
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
    transition: 0.3s;

`;