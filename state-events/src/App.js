import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { useToggle } from "./hooks/useToggle";
import { useTimeout } from "./hooks/useTimeout";

const App = () => {
  const cb = React.useCallback(
    () => () => {
      console.log("timed out");
    },
    []
  );

  const { start, reset } = useTimeout(cb, 3000);

  const [val, setVal] = useToggle(false);

  return (
    <>
      <p>{`${val}`}</p>
      <p>
        <button onClick={() => setVal()}>Toggle</button>
      </p>
      <p>
        <button onClick={() => start()}>Start</button>
      </p>
    </>
  );
};
export default App;
