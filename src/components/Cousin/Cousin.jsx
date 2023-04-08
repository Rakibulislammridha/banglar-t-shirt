import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ children, hasWife, ring }) => {
  return (
    <div>
      <h2>My Cousin</h2>
      <p>
        <small>{children}</small>
      </p>
      {hasWife && <Friend ring={ring}></Friend>}
    </div>
  );
};

export default Cousin;
