import React, { createContext } from 'react'
import ComB from './ComB'

const BioData = createContext()
const HomeTown = createContext()


const ComA = () => {
    return (
        <BioData.Provider value={"amarpal shakya"}>
            <HomeTown.Provider value={'Badaun'}>
                <div className="style">
                    <ComB/>
                </div>
            </HomeTown.Provider>
        </BioData.Provider>

    )
}
export default ComA;
export {HomeTown, BioData}
