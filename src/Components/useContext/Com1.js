import React, { createContext } from 'react'
import Com2 from './Com2'

export const fName = createContext()
export const lName = createContext()
export const quali = createContext()

const Com1 = () => {
    return (
        <fName.Provider value={'amarpal'}>
            <lName.Provider value={'shakya'}>
                <quali.Provider value={'10th from NIOS'}>
                    <Com2/>
                </quali.Provider>
            </lName.Provider>
        </fName.Provider>
    )
}

export default Com1;


