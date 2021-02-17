import React from 'react'
import {
    FeatureContainer,
    FeatureCard,
    FeatureTitle,
    FeatureDesc,
    FeatureButton
} from './FeatureElements'


export default () => {
    return(
       <FeatureContainer>
           <FeatureCard>
               <FeatureTitle>Pizza of the day</FeatureTitle>
               <FeatureDesc>Truffle alfredo sauce topped with 24 carat gold dust</FeatureDesc>
               <FeatureButton>Order Now</FeatureButton>
           </FeatureCard>
       </FeatureContainer>
    )
}