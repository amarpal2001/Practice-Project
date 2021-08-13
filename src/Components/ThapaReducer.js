import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state=initialState, action) =>{ 
    // console.log(state, action)
   switch(action.type){
       case 'increment':
           return state +1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
   }

}
const ThapaReducer = () => {    
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {count}<br/>
            <button onClick={()=>dispatch({type:'increment'})}>Inc</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Dec</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )
}
export default ThapaReducer;
