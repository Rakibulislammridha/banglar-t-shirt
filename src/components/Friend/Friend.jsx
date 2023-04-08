import React from "react";

const Friend = ({ ring }) => {
  return (
    <div>
      <h2>Wife</h2>
      {ring && <p>Ring: {ring}</p>}
    </div>
  );
};

export default Friend;
