import React from 'react'
import { HeroContainer, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

export default () => {
    return (
        <HeroContainer>
            <HeroItems>
                <HeroH1>GREATEST <br></br>PIZZA EVER</HeroH1>
                <HeroP>READY IN 60 SECONDS</HeroP>
                <HeroBtn>PLACE ORDER</HeroBtn>
            </HeroItems>
        </HeroContainer>
    )
}