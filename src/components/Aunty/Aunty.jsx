import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin hasWife={true} ring={ring}>
          Opi
        </Cousin>
        <Cousin>Sakiba</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
