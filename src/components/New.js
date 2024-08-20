import React, { useState } from "react";

// const New = () => {
//   return (
//     <div>New</div>
//   )
// }

function New() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="New">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default New;
