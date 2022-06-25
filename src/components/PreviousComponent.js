import React, { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <>
      <div>
        {count} | {previousCount}
      </div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        Decrement
      </button>
    </>
  );
};

export default PreviousComponent;
