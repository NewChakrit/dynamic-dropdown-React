import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Food from "./components/Food";
import MenuData from "./data/MenuData";

function App() {
  const [food, setFood] = useState(MenuData);

  const changeFoodData = (e) => {
    // console.log(e.target.value);

    const category = e.target.value;
    if (category === "allMenu") {
      setFood(MenuData);
    } else {
      const result = MenuData.filter((element) => {
        return element.menu === category;
      });
      // console.log(result);
      setFood(result);
    }
  };

  return (
    <div className="container">
      <Dropdown changeFoodData={changeFoodData} />
      <div className="content">
        {food.map((data, index) => {
          return <Food key={index} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;
