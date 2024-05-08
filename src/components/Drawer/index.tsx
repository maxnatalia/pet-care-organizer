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
        type="special"
        onAction={() => navigate(`${path}`)}
        title={"Go to Single Pet Page"}
      >
        <MdMore />
      </Button>
      <Button type="edit" onAction={onEditAction} title="Edit">
        <MdEditDocument />
      </Button>
      <Button type="delete" onAction={onDeleteAction} title="Delete">
        <MdDeleteForever />
      </Button>
      <Button type="default" title="Close" onAction={onClose}>
        <MdClose />
      </Button>
    </StyledDrawer>
  );
};

export default Drawer;
