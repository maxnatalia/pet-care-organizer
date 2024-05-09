import { createContext, useState } from "react";
import { Event, Pet } from "../types/types";
import { initialEventsList } from "../data/initialEventsList";
import { initialPetsList } from "../data/initialPetsList";

type AppContextType = {
  eventsList: Event[];
  setEventsList: React.Dispatch<React.SetStateAction<Event[]>>;
  editableEventId: string;
  setEditableEventId: React.Dispatch<React.SetStateAction<string>>;
  handleEditEvent: (id: Event["eventId"]) => void;
  petsList: Pet[];
  setPetsList: React.Dispatch<React.SetStateAction<Pet[]>>;
  editablePetId: string;
  setEditablePetId: React.Dispatch<React.SetStateAction<string>>;
  handleEditPet: (id: Pet["petId"]) => void;
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [eventsList, setEventsList] = useState<Event[]>(initialEventsList);
  const [editableEventId, setEditableEventId] = useState("");
  const [petsList, setPetsList] = useState<Pet[]>(initialPetsList);
  const [editablePetId, setEditablePetId] = useState("");

  const handleEditPet = (id: Pet["petId"]) => {
    petsList.find(editablePet => editablePet.petId === id);
    setEditablePetId(id);
  };

  const handleEditEvent = (id: Event["eventId"]) => {
    eventsList.find(editableEvent => editableEvent.eventId === id);
    setEditableEventId(id);
  };

  return (
    <AppContext.Provider
      value={{
        eventsList,
        setEventsList,
        editableEventId,
        setEditableEventId,
        handleEditEvent,
        petsList,
        setPetsList,
        editablePetId,
        setEditablePetId,
        handleEditPet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
