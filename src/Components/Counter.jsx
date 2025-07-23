import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () =>  {
        setCount(count-1);
    }
    
    return (
        <div style={{textAlign:'center', height:'130px',backgroundColor:'palegreen'}}>
        <h2 style={{textAlign:'center'}}>Counter</h2>
            <h3>Count = {count}</h3>
            <button onClick={handleIncrement} style={{margin:'10px',color:'green'}}>Increment</button>
            <button onClick={handleDecrement} style={{margin:'10px',color:'red'}}>Decrement</button>
        </div>
    )
}
export default Counter
