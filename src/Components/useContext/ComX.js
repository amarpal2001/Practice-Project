import React, { createContext } from 'react'
import ComY from './ComY'

export const email=createContext()
export const pass=createContext()


const ComX = () => {
    return (
        <email.Provider value={"amarpal0111@gmail.com"}>
            <pass.Provider value={'pragati240'}>
                <ComY/>
            </pass.Provider>
        </email.Provider>
    )
}

export default ComX
