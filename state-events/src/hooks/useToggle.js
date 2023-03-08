import React from "react";

export const useToggle = (defaultVal = false) => {
  const [val, setVal] = React.useState(defaultVal);

  const setToggle = (val) => {
    val ? setVal(val) : setVal((prev) => !prev);
  };

  return [val, setToggle];
};
