import React, { useReducer } from 'react'


const intialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    // console.log(state, action);
    switch (action.type) {
        // case 'increment 5':
        //     return {firstCounter:state.firstCounter + action.value}
        // case 'decrement 5':
        //     return {firstCounter:state.firstCounter-action.value}
        case 'increment':
            return { firstCounter: state.firstCounter + 1 }
        case 'decrement':
            return { firstCounter: state.firstCounter - 1 }
        case 'reset':
            return intialState
        default:
            return state
    }
}
const AmarReduce2 = () => {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            {count.firstCounter}<br />
            <button onClick={() =>  dispatch({ type: 'increment', value: 1 }) }>increment</button>
            <button onClick={() =>  dispatch({ type: 'decrement', value: 1 }) }>decrement</button>
            {/* <button onClick={()=>{dispatch({type:'increment 5', value:5})}}>increment 5</button>
            <button onClick={()=>{dispatch({type:'decrement 5', value:5})}}>decrement 5</button> */}
            <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
        </div>
    )
}
export default AmarReduce2;
