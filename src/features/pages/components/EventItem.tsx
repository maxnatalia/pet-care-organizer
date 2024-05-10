import InfoPanel from "../../../components/InfoPanel";
import Item from "../../../components/Item";
import useAppContext from "../../../context/useAppContext";
import { Event } from "../../../types/types";
import {
  findPetNameById,
  getEventEmoji,
} from "../../../utils/helpersFunctions";
import EventDrawer from "./EventDrawer";

type EventItemProps = {
  allInfo: boolean;
} & Event;

export const EventItem = ({
  allInfo,
  eventId,
  eventAddDate,
  eventUpdateDate,
  eventPetId,
  eventType,
  eventDate,
  eventDescription,
}: EventItemProps) => {
  const { petsList } = useAppContext();

  return (
    <Item
      id={eventId}
      key={eventId}
      addDate={eventAddDate}
      updateDate={eventUpdateDate}
      cardTitle={`${getEventEmoji(eventType)} ${eventType}`}
      actionsField={<EventDrawer eventId={eventId} eventPetId={eventPetId} />}
    >
      <InfoPanel avatar="📌" infoName="event date" infoDetail={eventDate} />
      {allInfo && (
        <InfoPanel
          avatar="🪪"
          infoName="pet name"
          infoDetail={findPetNameById(eventPetId, petsList)}
        />
      )}
      <InfoPanel
        avatar="📝"
        infoName="description"
        infoDetail={
          !eventDescription ? "No description entered..." : eventDescription
        }
      />
    </Item>
  );
};
