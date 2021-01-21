import { useState } from "react";
import DishList from "./DishList";
import Button from "./Button";

function DishCategory(props) {
  // const [dishes, addDish] = useState([]);
  const [buttonClicked, handleButtonClicked] = useState(false);

  return (
    <div>
      <h2>{props.categoryName}</h2>
      <DishList dishes={props.dishes} />
      <Button
        name="Add Dish"
        handleButtonClick={() => handleButtonClicked(!buttonClicked)}
      />
      <div hidden={buttonClicked}>
        <h3>Someday I will be an AddDishForm</h3>
      </div>
    </div>
  );
}

export default DishCategory;
