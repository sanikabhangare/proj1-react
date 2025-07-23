import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Counter from './Components/Counter';
import ChangeHeading from './Components/ChangeHeading';
import Calculator from './Components/Calculator';

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(true)


  return (
    <>
      <Navbar />
      <Counter />
      <Calculator />
      <ChangeHeading />


      <div style={{textAlign:'center', backgroundColor:'skyblue', height:'150px'}}>
      {isLoggedIn ? (<h2 className='greenFont'>User Logged In</h2>) : (<h2 className='redFont'>Please Login</h2>)}
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <h2 className={`${isLoggedIn ? 'purpleBlock' : 'whiteBlock'}`}>Style your Aura</h2>
      </div>
      


      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Product
          prod={{
            name: "Tulip",
            color: "Pink",
            inStock: true,
            price: 1000,
            description: "The tulip is a bright, cup-shaped flower known for its vibrant colors and smooth, elegant petals",
            image: "https://i.pinimg.com/originals/a3/44/47/a34447af271c797851dae11e5d995c58.jpg",
          }}
        />

        <Product
          prod={{
            name: "Rose",
            color: "Red",
            inStock: true,
            price: 1100,
            description: "The rose is a classic, fragrant flower known for its layered petals and wide range of colors, including red, pink, white, and yellow",
            image: "https://i.pinimg.com/originals/38/ed/88/38ed88568083ed61ab4d9f0429fe7f18.jpg",
          }}
        />

        <Product
          prod={{
            name: "Sunflower",
            color: "yellow",
            inStock: true,
            price: 1110,
            description: "The sunflower is a large, bright yellow flower known for its round shape and ability to turn toward the sun.",
            image: "https://i.pinimg.com/originals/46/a2/ef/46a2ef18bb81bb523d9cf52da4938dd7.jpg",
          }}
        />
      </div>


    </>
  );
}
export default App;
