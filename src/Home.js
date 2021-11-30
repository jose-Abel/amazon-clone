import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
          className="home__image"
          src="https://m.media-amazon.com/images/I/61Q6BYGdNxL._SX3000_.jpg" alt=""/>

          <div className="home__row">
            <Product 
              title="The lean startup"
              price={28.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400.jpg"
              rating={3}
            />
            <Product 
            
            />
          </div>

          <div className="home__row">
            <Product 
            
            />
            <Product 
            
            />
            <Product 
            
            />
          </div>
          
          <div className="home__row">
            <Product 
            
            />
          </div>          
      </div>
    </div>
  )
}

export default Home
