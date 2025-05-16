import { useRef, useEffect } from "react";

export const usePrev = (value) => {
  const ref = useRef();
  console.log("re-render happened with new value " + value);

  useEffect(() => {
    console.log("updated the ref to be " + value);
    ref.current = value;
  }, [value]);

  console.log("returned " + ref.current);
  return ref.current;
};
