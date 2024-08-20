// import { useEffect, useRef } from "react";

// export const useDebounce = <T extends any[]>(
//   callback: (...args: T) => void,
//   delay: number
// ) => {
//   const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     return () => {
//       if (timeoutIdRef.current) {
//         clearTimeout(timeoutIdRef.current);
//       }
//     };
//   }, []);

//   const debouncedCallback = (...args: any[]) => {
//     if (timeoutIdRef.current) {
//       clearTimeout(timeoutIdRef.current);
//     }

//     timeoutIdRef.current = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
//   return debouncedCallback;
// };
import { useEffect, useRef, useCallback } from "react";

export const useDebounce = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debouncedCallback = useCallback((...args: T) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};