import { createContext, useState } from "react";
import { Event, Pet } from "../types/types";
import { initialEventsList } from "../data/initialEventsList";
import { initialPetsList } from "../data/initialPetsList";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  const [eventsList, setEventsList] = useLocalStorage(
    "events",
    initialEventsList
  );
  const [petsList, setPetsList] = useLocalStorage("pets", initialPetsList);
  const [editablePetId, setEditablePetId] = useState("");
  const [editableEventId, setEditableEventId] = useState("");

  const handleEditPet = (id: Pet["petId"]) => {
    petsList.find((editablePet: Pet) => editablePet.petId === id);
    setEditablePetId(id);
  };

  const handleEditEvent = (id: Event["eventId"]) => {
    eventsList.find((editableEvent: Event) => editableEvent.eventId === id);
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
