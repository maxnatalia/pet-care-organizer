import { ReactNode } from "react";
import { StyledList } from "./styled";

type ListProps = {
  children: ReactNode;
};

const List = ({ children }: ListProps) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
