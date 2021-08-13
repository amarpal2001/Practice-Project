import React, { useContext } from 'react'
import {email, pass} from './ComX'


const ComZ = () => {
    const emailId = useContext(email)
    const password= useContext(pass)
    return (
        <div>
            <h3> My emailId  and password are as follows:<br/> <br/>{emailId} {password}</h3>
        </div>
    )
}

export default ComZ;