function Button(props) {
  return (
    <div>
      <button onClick={() => { console.log("hello") }}>{props.name}</button>
    </div>
  );
}

export default Button;
