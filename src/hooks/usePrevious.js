import { useRef } from "react";

/**
 * @param {Object} value The parameter to record current and previous value
 */

export default function usePrevious(value) {
  const currentRef = useRef(value);
  const previousRef = useRef();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
