import { useNavigate } from "react-router-dom";
import { MdOutlineMore } from "react-icons/md";
import Button from "../../../components/Button";
import Drawer from "../../../components/Drawer";
import { useDrawer } from "../../../hooks/useDrawer";
import { handleDeleteItem } from "../../../utils/helpersFunctions";
import useAppContext from "../../../context/useAppContext";

type PetDrawerProps = {
  petId: string;
};

const PetDrawer = ({ petId }: PetDrawerProps) => {
  const navigate = useNavigate();
  const { handleToggle, handleClose, openDrawerId } = useDrawer();
  const { handleEditPet, setPetsList, setEventsList } = useAppContext();
  return (
    <>
      <Button
        $variety="special"
        onClick={() => handleToggle(petId)}
        title="More..."
      >
        <MdOutlineMore />
      </Button>
      {openDrawerId === petId && (
        <Drawer
          path={`/pet/${petId}`}
          onDeleteAction={() =>
            handleDeleteItem(petId, "", setPetsList, setEventsList)
          }
          onEditAction={() => {
            navigate("/petForm");
            handleEditPet(petId);
          }}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default PetDrawer;
