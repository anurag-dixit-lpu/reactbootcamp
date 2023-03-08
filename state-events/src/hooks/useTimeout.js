import React from "react";

export const useTimeout = (callback, delay = 1000) => {
  const callbackRef = React.useRef();
  const timeoutRef = React.useRef();

  const reset = () => {
    clearTimeout(timeoutRef.current);
  };

  React.useEffect(() => {
    callback.current = callback;
  }, []);

  const start = () => {
    timeoutRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
  };

  return { reset, start };
};
