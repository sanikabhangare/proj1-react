import React from "react";

const Navbar = ()=>{
    return(
        <nav style={{'display':'flex','justifyContent':'space-between'}}>
            <div style={{'textDecoration':'none'}}>
                <h1><a href="#">Flowers</a></h1>
            </div>
            <div style={{'textDecoration':'none'}}>
            <ul style={{'display':'flex','justifyContent':'space-evenly'}}>
                <li style={{'marginRight':'20px'}}><a href="#">Home</a></li>
                <li style={{'marginRight':'20px'}}><a href="#">Products</a></li>
                <li style={{'marginRight':'20px'}}><a href="#">Features</a></li>
                <li style={{'marginRight':'20px'}}><a href="#">Contanct Us</a></li>
                <li style={{'marginRight':'20px'}}><a href="#">About Us</a></li>
            </ul>
            </div>
        </nav>
    )
}
export default Navbar