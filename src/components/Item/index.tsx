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

type ItemProps = {
  id: string;
  as?: "div" | "li";
  cardTitle: string;
  addDate: string;
  updateDate: string;
  actionsField?: ReactNode;
  children: ReactNode;
};

const Item = ({
  id,
  as = "li",
  cardTitle,
  addDate,
  updateDate,
  actionsField,
  children,
}: ItemProps) => {
  return (
    <StyledItem key={id} as={as}>
      <HorizontalWrapper>
        <Title>{cardTitle}</Title>
        <div>{actionsField}</div>
      </HorizontalWrapper>
      <ChildrenBox>{children}</ChildrenBox>
      <Box>
        <span>
          <Caption>added:</Caption>
          <Detail>{addDate}</Detail>
        </span>
        <span>
          <Caption>updated:</Caption>
          <Detail>{updateDate ? updateDate : "---"}</Detail>
        </span>
      </Box>
    </StyledItem>
  );
};

export default Item;
