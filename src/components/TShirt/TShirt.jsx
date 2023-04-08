import React from "react";
import "./TShirt.css";

const TShirt = ({ tShirt, handleAddToCart }) => {
  //   console.log(tShirt);
  const { picture, name, price } = tShirt;
  return (
    <div className="tShirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Bye Nows</button>
    </div>
  );
};

export default TShirt;
