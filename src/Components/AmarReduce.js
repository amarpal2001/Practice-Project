import React, { useReducer } from 'react'


const intialState = 0
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1 
        case 'reset':
            return intialState
        default:
            return state    
    }
}


const AmarReduce = () => {
    const [count, dispatch] = useReducer(reducer, intialState)

    return (
        <div>
            count-{count}<br/>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('increment')}>decrement</button>
            <button onClick={()=>{dispatch('reset')}}>reset</button>
        </div>
    )
}

export default AmarReduce;
