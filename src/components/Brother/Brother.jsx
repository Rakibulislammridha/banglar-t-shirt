import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const goldenRing2 = useContext(RingContext);
  return (
    <div>
      <h2>My Bro</h2>
      <p>{goldenRing2}</p>
    </div>
  );
};

export default Brother;
