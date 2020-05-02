import React from "react";
import "./styles.css";

let time = null;
const Toolbar = ({ onSearch }) => {
  const handleChange = (value) => {
    clearTimeout(time);
    time = setTimeout(() => {
      onSearch(value);
    }, 500);
  };
  
  return (
    <div className="topbar">
      <img src="images/logo.svg" alt="logo" />
      <input
        className="search"
        placeholder="Buscar"
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </div>
  );
};

export default Toolbar;
