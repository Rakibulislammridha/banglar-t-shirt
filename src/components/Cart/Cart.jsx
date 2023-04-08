import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {cart.map((shirt) => (
        <p key={shirt._id}>
          {shirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(shirt._id)}>X</button>{" "}
        </p>
      ))}
    </div>
  );
};

export default Cart;
