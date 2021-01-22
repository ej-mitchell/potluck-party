import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DishCategory from "./components/DishCategory";
import PotluckForm from "./components/PotluckForm";

function App() {
  const [showPotluck, handleShowPotluck] = useState(true);
  const [showPotluckForm, handleShowPotluckForm] = useState(true);
  const [potluckName, changePotluckName] = useState("");
  const [potluckDate, changePotluckDate] = useState(new Date());
  const [potluckEmails, changePotluckEmails] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to Potluck Party!</h1>
      <h2>Let's get started:</h2>
      <Button
        name="Start a Potluck!"
        handleButtonClick={() => handleShowPotluckForm(!showPotluckForm)}
      />

      <div hidden={showPotluckForm}>
        <PotluckForm
          potluckName={potluckName}
          potluckDate={potluckDate}
          potluckEmails={potluckEmails}
          handlePotluckName={(e) => changePotluckName(e)}
          handlePotluckDate={(e) => changePotluckDate(e)}
          handlePotluckEmails={(e) =>
            changePotluckEmails([...potluckEmails, e])
          }
        />
      </div>

      <Button
        name={(showPotluck ? "See" : "Hide") + " Current Potluck"}
        handleButtonClick={() => handleShowPotluck(!showPotluck)}
      />
      <div hidden={showPotluck}>
        <h2>{potluckName}</h2>
        <h2>{potluckDate.toString()}</h2>
        <DishCategory
          categoryName="Mains"
          dishes={["beef", "barley", "potatoes"]}
        />
      </div>
    </div>
  );
}

export default App;
