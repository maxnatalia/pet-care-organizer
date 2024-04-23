import { useContext } from "react";
import { PetsContext } from "./petsContext";

const usePetsContext = () => {
  const pets = useContext(PetsContext);

  if (pets === null) {
    throw new Error("Something went wrong! - PetsContext");
  }

  return pets;
};

export default usePetsContext;
