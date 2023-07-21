import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function useStoredState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useStoredState;
