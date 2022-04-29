import React from "react";

function Dropdown({ changeFoodData }) {
  return (
    <nav>
      <h2>Dynamic Dropdown</h2>
      <select className="menu" onChange={changeFoodData}>
        <option value="allMenu">All Menu</option>
        <option value="steak">Steak</option>
        <option value="stirFried">Stir-fried</option>
        <option value="curryTomyum">Curry-Tomyum</option>
        <option value="drink">Drink (Tea Coffee Milk)</option>
      </select>
    </nav>
  );
}

export default Dropdown;
