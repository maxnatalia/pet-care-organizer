import { createContext, useState } from "react";
import { Event } from "../types/types";
import { initialEventsList } from "../data/initialEventsList";

type EventsContextType = {
  eventsList: Event[];
  setEventsList: React.Dispatch<React.SetStateAction<Event[]>>;
  handleDeleteEvent: (id: Event["eventId"]) => void;
};

type EventsProviderProps = {
  children: React.ReactNode;
};

export const EventsContext = createContext<EventsContextType | null>(null);

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [eventsList, setEventsList] = useState<Event[]>(initialEventsList);

  const handleDeleteEvent = (id: Event["eventId"]) => {
    setEventsList(prevList => prevList.filter(event => event.eventId !== id));
  };
  return (
    <EventsContext.Provider
      value={{
        eventsList,
        setEventsList,
        handleDeleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
