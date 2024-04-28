import { ReactNode } from "react";
import {
  Box,
  Caption,
  ChildrenBox,
  Detail,
  HorizontalWrapper,
  StyledItem,
  Title,
} from "./styled";
import Button from "../Button";
import { useOpenDrawer } from "../../hooks/useOpenDrawer";
import Drawer from "../Drawer";

type ItemProps = {
  id: string;
  cardTitle: string;
  onDeleteItem: () => void;
  onEditItem: () => void;
  addDate: string;
  updateDate: string;
  children: ReactNode;
};

const Item = ({
  id,
  cardTitle,
  onDeleteItem,
  onEditItem,
  addDate,
  updateDate,
  children,
}: ItemProps) => {
  const { handleToggle, handleClose, isOpen } = useOpenDrawer();

  return (
    <StyledItem key={id}>
      <HorizontalWrapper>
        <Title>{cardTitle}</Title>
        <Button $special onClick={handleToggle}>
          ...
        </Button>
      </HorizontalWrapper>
      {isOpen && (
        <Drawer
          path={"/"}
          onDelete={onDeleteItem}
          onEdit={onEditItem}
          onClose={handleClose}
        />
      )}
      <ChildrenBox>{children}</ChildrenBox>
      <Box>
        <span>
          <Caption>added:</Caption>
          <Detail>{addDate}</Detail>
        </span>
        <span>
          <Caption>updated:</Caption>
          <Detail>{!updateDate && "---"}</Detail>
        </span>
      </Box>
    </StyledItem>
  );
};

export default Item;
