import { MdDeleteForever } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { MdMore } from "react-icons/md";
import { CloseIcon, StyledDrawer } from "./styled";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

type DrawerProps = {
  path: string;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
};

const Drawer = ({ path, onEdit, onDelete, onClose }: DrawerProps) => {
  const navigate = useNavigate();

  return (
    <StyledDrawer>
      <Button
        $special
        onClick={() => navigate(`${path}`)}
        title={"Go to Single Pet Page"}
      >
        <MdMore />
      </Button>
      <Button $edit onClick={onEdit} title="Edit">
        <MdEditDocument />
      </Button>
      <Button $delete onClick={onDelete} title="Delete">
        <MdDeleteForever />
      </Button>
      <CloseIcon title="Close" onClick={onClose} />
    </StyledDrawer>
  );
};

export default Drawer;
