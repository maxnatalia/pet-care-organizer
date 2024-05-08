import { ReactNode } from "react";
import { StyledButton } from "./styled";

type ButtonProps = {
  type: "edit" | "delete" | "special" | "default";
  onAction: () => void;
  title: string;
  children: ReactNode;
};

const Button = ({ onAction, type, title, children }: ButtonProps) => {
  return (
    <StyledButton $type={type} onClick={onAction} title={title}>
      {children}
    </StyledButton>
  );
};

export default Button;
