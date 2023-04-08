import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring }) => {
  const goldenRing = useContext(RingContext);
  return (
    <div>
      <h2>Wife</h2>
      <p>Ring: {goldenRing}</p>
    </div>
  );
};

export default Special;
