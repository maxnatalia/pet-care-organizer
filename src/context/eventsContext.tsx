import { createContext, useState } from "react";
import { Event } from "../types/types";
import { initialEventsList } from "../data/initialEventsList";

type EventsContextType = {
  eventsList: Event[];
  setEventsList: React.Dispatch<React.SetStateAction<Event[]>>;
  editableEventId: string;
  setEditableEventId: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteEvent: (id: Event["eventId"]) => void;
  handleEditEvent: (id: Event["eventId"]) => void;
};

type EventsProviderProps = {
  children: React.ReactNode;
};

export const EventsContext = createContext<EventsContextType | null>(null);

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [eventsList, setEventsList] = useState<Event[]>(initialEventsList);
  const [editableEventId, setEditableEventId] = useState("");

  const handleDeleteEvent = (id: Event["eventId"]) => {
    setEventsList(prevList => prevList.filter(event => event.eventId !== id));
  };

  const handleEditEvent = (id: Event["eventId"]) => {
    eventsList.find(editableEvent => editableEvent.eventId === id);
    setEditableEventId(id);
  };

  return (
    <EventsContext.Provider
      value={{
        eventsList,
        setEventsList,
        editableEventId,
        setEditableEventId,
        handleDeleteEvent,
        handleEditEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
