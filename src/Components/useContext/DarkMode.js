import React, { useEffect, useState } from 'react'
import './dark.css'
const DarkMode = () => {

    const getMode = ()=>{
        return JSON.parse(localStorage.getItem("mode"))
    }
    const [dark, setDark] = useState(getMode())
    useEffect (()=>{
        localStorage.setItem('mode', JSON.stringify(dark))
    },[dark])
    
   
    return (
        
        <div className={dark? "app dark_mode":'app'}>
            <div className="nav">
                <label className="switch">
                    <input checked={dark} type="checkbox" onChange={()=>setDark(!dark)}/> 
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='content'>
                <h1>{dark?"dark mode is on":"light mode is on:)"}</h1>
                <p style={{fontSize:"20px", height:'77vh'}} className="text">Want to see some magic? press toggle button??</p>
            </div>
        </div>
    )
}
export default DarkMode;