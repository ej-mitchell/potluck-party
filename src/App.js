import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DishCategory from "./components/DishCategory";

function App() {
  const [showPotluck, handleShowPotluck] = useState(true);

  return (
    <div className="App">
      <h1>Welcome to Potluck Party!</h1>
      <h2>Let's get started:</h2>
      <Button
        name="Start a Potluck!"
        handleButtonClick={() => alert("I don't work yet")}
      />

      <Button
        name= {(showPotluck ? "See" : "Hide") + " Current Potluck"}
        handleButtonClick={() => handleShowPotluck(!showPotluck)}
      />
      <div hidden={showPotluck}>
        <DishCategory
          categoryName="Mains"
          dishes={["beef", "barley", "potatoes"]}
        />
      </div>
    </div>
  );
}

export default App;
