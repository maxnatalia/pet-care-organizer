import { useNavigate } from "react-router-dom";
import {
  MdDeleteForever,
  MdEditDocument,
  MdClose,
  MdMore,
} from "react-icons/md";
import Button from "../Button";
import { StyledDrawer } from "./styled";

type DrawerProps = {
  path: string;
  onEditAction: () => void;
  onDeleteAction: () => void;
  onClose: () => void;
};

const Drawer = ({
  path,
  onEditAction,
  onDeleteAction,
  onClose,
}: DrawerProps) => {
  const navigate = useNavigate();

  return (
    <StyledDrawer>
      <Button
        $variety="special"
        onClick={() => navigate(`${path}`)}
        title={"Go to Single Pet Page"}
      >
        <MdMore />
      </Button>
      <Button $variety="edit" onClick={onEditAction} title="Edit">
        <MdEditDocument />
      </Button>
      <Button $variety="delete" onClick={onDeleteAction} title="Delete">
        <MdDeleteForever />
      </Button>
      <Button $variety="default" title="Close" onClick={onClose}>
        <MdClose />
      </Button>
    </StyledDrawer>
  );
};

export default Drawer;
