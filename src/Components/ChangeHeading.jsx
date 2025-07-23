import React, { useState } from 'react'

const ChangeHeading = () => {
    const[heading, setHeading] = useState('Learned HTML CSS Javascript')
    function handleChangeHeading(){
        setHeading('Now learning ReactJS')
    }
  return (
    <div style={{textAlign:'center', height:'100px',backgroundColor:'lavender'}}>
      <h1>{heading}</h1>
      <button onClick={handleChangeHeading}>Change Heading</button>
    </div>
  )
}

export default ChangeHeading
