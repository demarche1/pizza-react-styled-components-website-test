import React from 'react'
import {
    ProductsContainer,
    ProductsHeader,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements'
import {Link} from 'react-router-dom'

export default ({heading, data}) => {
    return(
       <ProductsContainer>
           <ProductsHeader>{heading}</ProductsHeader>
           <ProductWrapper>
               {data.map((product, index) => {
                   return (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton to='/cart'>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                   )
               })}
           </ProductWrapper>
       </ProductsContainer>
    )
}