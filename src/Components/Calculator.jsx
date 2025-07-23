import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()


    function addition(){
        setResult(Number(n1)+Number(n2))
    }
    function subtraction(){
        setResult(Number(n1)-Number(n2))
    }
    function multiplication(){
        setResult(Number(n1)*Number(n2))
    }
    function division(){
        if(n2==0){
            setResult("can't divide by ZERO")
        }else{
        setResult(Number(n1)/Number(n2))
        }
    }
  return (
    <div>
        <input type="number" onChange={(e)=>setN1(e.target.value)}/>
        <input type="number" onChange={(e)=>setN2(e.target.value)}/>
        <div>{result}</div>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
    </div>
  )
}

export default Calculator
