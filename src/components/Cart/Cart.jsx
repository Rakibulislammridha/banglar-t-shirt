import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Add Some Products</p>;
  } else {
    message = (
      <div>
        <h3>Milliner</h3>
        <p>
          <small className="orange">Thanks For Westing your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>
      {cart.length > 2 ? <span>Bye More</span> : <span>Fokira</span>}
      {message}
      {cart.map((shirt) => (
        <p key={shirt._id}>
          {shirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(shirt._id)}>X</button>{" "}
        </p>
      ))}
      {cart.length === 4 && <p>Bonus one items for you</p>}
      {cart.length === 3 || <h3>3 ta to hoilo na..!</h3>}
    </div>
  );
};

/**
 *
 * Conditional rendering
 * 1. use if or if ==> else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'for false'
 * 3. Logical && : (if the condition is true then the next thing will display)
 * 4. Logical || : (if the condition is false then the next thing will display)
 *
 */

/**
 *
 * Conditional Styles (css class)
 * 1. use ternary
 * 2. ternary inside template string
 *
 */

export default Cart;
