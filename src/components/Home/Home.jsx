import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast from "react-hot-toast";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    // console.log(tShirt);
    const exists = cart.find((ts) => ts._id === tShirt._id);
    if (exists) {
      toast("You Have Already Added This T-Shirt");
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tShirts-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
