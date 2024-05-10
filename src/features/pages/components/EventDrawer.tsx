import { MdOutlineMore } from "react-icons/md";
import Button from "../../../components/Button";
import Drawer from "../../../components/Drawer";
import { useDrawer } from "../../../hooks/useDrawer";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../../context/useAppContext";
import { handleDeleteItem } from "../../../utils/helpersFunctions";

type EventDrawerProps = {
  eventId: string;
  eventPetId: string;
};

const EventDrawer = ({ eventId, eventPetId }: EventDrawerProps) => {
  const navigate = useNavigate();
  const { handleToggle, handleClose, openDrawerId } = useDrawer();
  const { setEventsList, handleEditEvent } = useAppContext();

  return (
    <>
      <Button
        $variety="special"
        onClick={() => handleToggle(eventId)}
        title="More..."
      >
        <MdOutlineMore />
      </Button>
      {openDrawerId === eventId && (
        <Drawer
          path={`/pet/${eventPetId}`}
          onDeleteAction={() =>
            handleDeleteItem("", eventId, null, setEventsList)
          }
          onEditAction={() => {
            navigate("/eventForm");
            handleEditEvent(eventId);
          }}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default EventDrawer;
