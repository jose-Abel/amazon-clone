import React from 'react';
import Product from "./Product";
import Header from './Header';
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
              id="31231243"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={28.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400.jpg"
            />
            <Product
              id="45467767"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
              price={28.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AZ_SX450_.jpg"
            />
          </div>

          <div className="home__row">
            <Product 
              id="67657098"
              title="Samsung LC45GE1322435NDS 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product 
              id="12335685"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={4}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product 
              id="45792479"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          
          <div className="home__row">
            <Product 
              id="34578957"
              title="Samsung LC45T4644656SUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>          
      </div>
    </div>
  )
}

export default Home
