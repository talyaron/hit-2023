function counter() {
  let counter = 0;
  return (
    <center>
      <div>
        <button onClick={add_one}>Click</button>
        <label>{counter}</label>
      </div>
    </center>
  );

  function add_one() {
    counter++;
  }
}
