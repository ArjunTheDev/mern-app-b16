import React, { useState, useMemo, useCallback } from "react";

// Child component
const Child = React.memo(({ increment }) => {
  console.log("Child component re-rendered");
  return (
    <button onClick={increment} className="p-2 bg-blue-500 text-white rounded">
      Increment Count from Child
    </button>
  );
});

const HookExample = () => {
  const [count, setCount] = useState(0);
  const [testCount, setTestCount] = useState(0);
  const [number, setNumber] = useState(5);

  console.log("Parent re-rendered");

  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); 

  const increment = useCallback(() => {
    console.log("Incrementing count...");
    setCount((prev) => prev + 1);
  }, [testCount]); // new function is created on every render -> vldglddfssf

  return (
    <div>
      <h2>Factorial of {number} is: {factorial}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>

      <h2>Count: {testCount}</h2>
      <button style={{marginRight: "10px"}} onClick={() => setTestCount(testCount + 1)}>Increase Test Count</button>

      <Child increment={increment} />
    </div>
  );
};

export default HookExample;
