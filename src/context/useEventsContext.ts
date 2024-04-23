import { useContext } from "react";
import { EventsContext } from "./eventsContext";

const useEventsContext = () => {
  const events = useContext(EventsContext);

  if (events === null) {
    throw new Error("Something went wrong! - PetsContext");
  }

  return events;
};

export default useEventsContext;
