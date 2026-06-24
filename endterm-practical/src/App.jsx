import "./App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (number === "") {
      setResult("Please enter a number.");
      return;
    }

    const num = parseInt(number);
    const digits = num.toString().split("");
    const power = digits.length;

    let sum = 0;

    for (let digit of digits) {
      sum += Math.pow(parseInt(digit), power);
    }

    if (sum === num) {
      setResult(`${num} is an Armstrong Number.`);
    } else {
      setResult(`${num} is not an Armstrong Number.`);
    }
  };

  return (
    <div className="container">
      <h2>Armstrong Number Checker</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <br />

      <button onClick={checkArmstrong}>Check</button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;