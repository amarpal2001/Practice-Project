import React, { useContext } from 'react'
import {fName, quali, lName} from './Com1'



const Com3 = () => {
    const firstName = useContext(fName)
    const lastName = useContext(lName)
    const qualification = useContext(quali)
    return (
        <div>
            <h2>My first name is {firstName} and My lastName is {lastName}</h2><br/>
               <h4>I have completed my {qualification}</h4>
        </div>
    )
}

export default Com3;
