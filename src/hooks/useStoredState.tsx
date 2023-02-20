import { useState, useEffect } from "react";

const useStoredState = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if(storedValue) {
      return JSON.parse(storedValue);
    } else {
      return initialState
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState];
}

export default useStoredState;