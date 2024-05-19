import Section from "../../../components/Section";
import List from "../../../components/List";
import Problem from "../../../components/Problem";
import useAppContext from "../../../context/useAppContext";
import { EventItem } from "../components/EventItem";
import EventsOverview from "../components/EventsOverview";

const AllEvents = () => {
  const { eventsList } = useAppContext();

  return (
    <>
      <Section header={"Events Overview"}>
        <EventsOverview />
      </Section>
      {eventsList.length === 0 && <Problem />}
      {eventsList.length !== 0 && (
        <Section
          header="List of Events"
          title="Here, you'll discover all the events created for your pets.
          You can edit or delete existing events, as well as add new ones to keep track of your furry friends' activities."
        >
          <List>
            {eventsList.map(event => (
              <EventItem
                allInfo
                key={event.eventId}
                eventId={event.eventId}
                eventPetId={event.eventPetId}
                eventAddDate={event.eventAddDate}
                eventUpdateDate={event.eventUpdateDate}
                eventDate={event.eventDate}
                eventDescription={event.eventDescription}
                eventType={event.eventType}
              />
            ))}
          </List>
        </Section>
      )}
    </>
  );
};

export default AllEvents;
