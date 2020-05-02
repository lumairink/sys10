import React from "react";
import "./styles.css";

const Card = ({ img = "", width = 150, height = 150 }) => (
  <div className="card" style={{ width, height }}>
    <img src={img} />
  </div>
);

export default Card;
