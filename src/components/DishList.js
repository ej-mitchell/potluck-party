function DishList(props) {
  const dishes = props.dishes.map((dish) => <li key={dish}>{dish}</li>);

  return (
    <div>
      <ul>{dishes}</ul>
    </div>
  );
}

export default DishList;
