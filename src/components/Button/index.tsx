import { ComponentProps, ReactNode } from "react";
import { StyledButton } from "./styled";

type ButtonProps = {
  $variety: "edit" | "delete" | "special" | "default";
  children: ReactNode;
} & ComponentProps<typeof StyledButton>;

const Button = ({ $variety, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} $variety={$variety}>
      {children}
    </StyledButton>
  );
};

export default Button;
