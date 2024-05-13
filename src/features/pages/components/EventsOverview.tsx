import InfoPanel from "../../../components/InfoPanel";
import Tag from "../../../components/Tag";
import useAppContext from "../../../context/useAppContext";
import {
  findPetNameById,
  getEventEmoji,
} from "../../../utils/helpersFunctions";

const EventsOverview = () => {
  const { eventsList, petsList } = useAppContext();
  return (
    <>
      <InfoPanel
        $extra
        avatar={eventsList.length.toString()}
        infoName="TOTAL"
        infoDetail="EVENTS"
      />
      <div>
        {eventsList.map(event => (
          <Tag
            key={event.eventId}
            path={`/pet/${event.eventPetId}`}
            icon={getEventEmoji(event.eventType)}
            tagName={event.eventType}
            title={`Go to ${findPetNameById(
              event.eventPetId,
              petsList
            )}'s page`}
          />
        ))}
        <Tag
          $special
          path={"/eventForm"}
          icon={"➕"}
          tagName={"Add event"}
          title={"Add new event"}
        />
      </div>
    </>
  );
};

export default EventsOverview;
