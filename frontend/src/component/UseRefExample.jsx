import React, { useEffect, useRef, useState } from "react";

function UseRefExample() {
  const countRef = useRef(0);
  const inputRef = useRef(null);
  const [stateCount, setStateCount] = useState(0);

  console.log("Rendered!");
  const handleRefClick = () => {
    countRef.current += 1;
    console.log(countRef);
    console.log("Ref Count:", countRef.current);
  };

  const handleStateClick = () => {
    setStateCount(stateCount + 1);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>🔵 Ref Count: {countRef.current} (Does NOT re-render)</p>
      <p>🟢 State Count: {stateCount} (Re-renders the UI)</p>

      <button style={{marginRight: '10px'}} onClick={handleRefClick}>Increase Ref Count</button>
      <button onClick={handleStateClick}>Increase State Count</button>

      <input ref={inputRef} />
    </div>
  );
}

export default UseRefExample;
