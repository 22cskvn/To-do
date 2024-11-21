import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }

    let res;
    switch (operation) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = "Unknown operation";
    }

    setResult(res);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="app">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="buttons">
          <button onClick={() => handleCalculate("+")}>+</button>
          <button onClick={() => handleCalculate("-")}>-</button>
          <button onClick={() => handleCalculate("*")}>*</button>
          <button onClick={() => handleCalculate("/")}>/</button>
        </div>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        {result !== null && <h2>Result: {result}</h2>}
      </div>
    </div>
  );
}

export default App;
