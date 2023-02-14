import React, { useState } from "react";
import list from "../Data";
import Cards from "./Cards";
import "../Styles/main.css";

const Main = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Main;
