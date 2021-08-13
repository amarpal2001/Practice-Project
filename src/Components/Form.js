import React, { useState } from 'react'

const Form = () => {
    const [num, setNum] = useState()
    return (
        <div>
            <h1>You choose {num} value</h1>
            <select value={num} onChange={(e)=>setNum(e.target.value)} style={{height:'30px', width:'70px'}}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select><br/><br/>
            <button onClick={()=>setNum('')} style={{backgroundColor:"aqua"}}>click</button>

        </div>
    )
}
export default Form;


