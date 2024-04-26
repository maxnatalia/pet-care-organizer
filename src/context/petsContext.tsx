import { createContext, useState } from "react";
import { initialPetsList } from "../data/initialPetsList";
import { Pet } from "../types/types";

type PetsContextType = {
  petsList: Pet[];
  setPetsList: React.Dispatch<React.SetStateAction<Pet[]>>;
  handleDeletePet: (id: Pet["petId"]) => void;
};

type PetsProviderProps = {
  children: React.ReactNode;
};

export const PetsContext = createContext<PetsContextType | null>(null);

export const PetsProvider = ({ children }: PetsProviderProps) => {
  const [petsList, setPetsList] = useState<Pet[]>(initialPetsList);

  const handleDeletePet = (id: Pet["petId"]) => {
    setPetsList(prevList => prevList.filter(pet => pet.petId !== id));
  };

  return (
    <PetsContext.Provider
      value={{
        petsList,
        setPetsList,
        handleDeletePet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
