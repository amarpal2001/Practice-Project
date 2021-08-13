import React, { useState } from 'react'

const Time = () => {
    const time  = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time)
    const updateTime = () =>{ 
        const time  = new Date().toLocaleTimeString();
        setCtime(time)

    };
    setInterval(updateTime,1000)
   return (
        <div style={{backgroundColor:"green", height:'100vh', width:'1360px', position:'absolute'}}>
            <div style={{height:'75px', width:'300px', border:'1px solid black', marginLeft:'550px',backgroundColor:"red", position:'relative', top:'200px'}}>
                <h1 style={{marginBottom:'20px'}}>{ctime}  AM</h1><br/>
            </div>
        </div>
    )
}
export default Time;;