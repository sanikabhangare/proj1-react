import React from "react";
const Product = (props) =>{
    const prod = props.prod
    console.log(prod)
    return(
        <div style={{marginTop:'100px',width:'18rem', backgroundColor:'palegreen'}}>
            <img src={prod.image} alt="Product Image" style={{'width':'18rem',height: "300px"}}/>
            <h2 style={{textAlign:'center'}}>{prod.name}</h2>
            <p style={{textAlign:'center'}}>{prod.description}</p>
            <p>Price : ₹ {prod.price}</p>
            <p style={{color:'green'}}>Instock</p>
            <p style={{textAlign:'center'}}><button style={{padding:'5px 10px'}}>More Info</button></p>
        </div>
    )
}
export default Product