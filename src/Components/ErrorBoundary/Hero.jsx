import React from 'react'

const Hero = ({heroName}) => {
    if(heroName==="Joker"){
        throw new Error("Not a Hero!")
    }
    return (
        <div>
            <h4>{heroName}</h4>
        </div>
    )
}

export default Hero;
