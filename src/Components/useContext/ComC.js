import React, { useContext } from 'react'
import {BioData, HomeTown} from './ComA'


const ComC = () => {
    const fName = useContext(BioData)
    const homeTown = useContext(HomeTown)
    return (
        <div>
            <h1> MY name is {fName} and My hometown is {homeTown}</h1>
        </div>
    )
}

export default ComC
