function Button(props) {
  return (
    <div>
      <button onClick={() => props.handleButtonClick()}>{props.name}</button>
    </div>
  );
}

export default Button;
