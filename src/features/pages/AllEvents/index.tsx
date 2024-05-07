import Section from "../../../components/Section";
import List from "../../../components/List";
import useEventsContext from "../../../context/useEventsContext";
import Item from "../../../components/Item";
import InfoPanel from "../../../components/InfoPanel";
import { findPetNameById } from "../../../utils/helpersFunctions";
import usePetsContext from "../../../context/usePetsContext";
import Problem from "../../../components/Problem";

const AllEvents = () => {
  const { eventsList, handleDeleteEvent } = useEventsContext();
  const { petsList } = usePetsContext();

  return (
    <>
      {eventsList.length === 0 && <Problem />}
      {eventsList.length !== 0 && (
        <Section header="All events">
          <List>
            {eventsList.map(event => (
              <Item
                id={event.eventId}
                key={event.eventId}
                path={`/pet/${event.eventPetId}`}
                onDeleteItem={() => handleDeleteEvent(event.eventId)}
                onEditItem={() => handleDeleteEvent(event.eventId)}
                addDate={event.eventAddDate}
                updateDate={event.eventUpdateDate}
                cardTitle="EVENT CARD"
              >
                <InfoPanel
                  avatar="A"
                  infoName="event type"
                  infoDetail={event.eventType}
                />
                <InfoPanel
                  avatar="📌"
                  infoName="event date"
                  infoDetail={event.eventDate}
                />
                <InfoPanel
                  avatar="🪪"
                  infoName="pet name"
                  infoDetail={findPetNameById(event.eventPetId, petsList)}
                />
                <InfoPanel
                  avatar="📝"
                  infoName="description"
                  infoDetail={
                    !event.eventDescription
                      ? "No description entered..."
                      : event.eventDescription
                  }
                />
              </Item>
            ))}
          </List>
        </Section>
      )}
    </>
  );
};

export default AllEvents;
