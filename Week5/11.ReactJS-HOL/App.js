import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  
  function sayHello() {
    alert("Hello! Member");
  }

  function handleIncrement() {
    increment();
    sayHello();
  }
  function sayWelcome(message) {
  alert(message);
}
function handlePress(event) {
  alert("I was clicked");
  console.log(event);
}
function convertCurrency() {
  const rupees = 80;
  const euro = rupees / 90;
  alert("Euro Value is " + euro.toFixed(2));
}

  return (
    <div>

      <h2>{count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>
      <br /><br />

<button onClick={() => sayWelcome("Welcome")}>
  Say Welcome
</button>
<br /><br />

<button onClick={handlePress}>
  OnPress
</button>
<br /><br />

<button onClick={convertCurrency}>
  Convert Currency
</button>

    </div>
  );
}

export default App;