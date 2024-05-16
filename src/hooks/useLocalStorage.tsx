import { useState, useEffect } from "react";
import { Event, Pet } from "../types/types";

export const useLocalStorage = (
  key: string,
  defaultValue: boolean | Pet[] | Event[]
) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
