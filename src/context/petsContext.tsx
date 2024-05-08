import { createContext, useState } from "react";
import { initialPetsList } from "../data/initialPetsList";
import { Pet } from "../types/types";

type PetsContextType = {
  petsList: Pet[];
  setPetsList: React.Dispatch<React.SetStateAction<Pet[]>>;
  editablePetId: string;
  setEditablePetId: React.Dispatch<React.SetStateAction<string>>;
  handleDeletePet: (id: Pet["petId"]) => void;
  handleEditPet: (id: Pet["petId"]) => void;
};

type PetsProviderProps = {
  children: React.ReactNode;
};

export const PetsContext = createContext<PetsContextType | null>(null);

export const PetsProvider = ({ children }: PetsProviderProps) => {
  const [petsList, setPetsList] = useState<Pet[]>(initialPetsList);
  const [editablePetId, setEditablePetId] = useState("");

  const handleDeletePet = (id: Pet["petId"]) => {
    setPetsList(prevList => prevList.filter(pet => pet.petId !== id));
  };

  const handleEditPet = (id: Pet["petId"]) => {
    petsList.find(editablePet => editablePet.petId === id);
    setEditablePetId(id);
  };

  return (
    <PetsContext.Provider
      value={{
        petsList,
        setPetsList,
        editablePetId,
        setEditablePetId,
        handleDeletePet,
        handleEditPet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
