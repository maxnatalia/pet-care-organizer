import { ComponentProps, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./styled";

type ButtonProps = {
  children: ReactNode;
  redirectPath?: string;
  $special?: boolean;
} & ComponentProps<typeof StyledButton>;

const Button = ({
  children,
  redirectPath,
  $special = false,
  ...props
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClickNavigation = () => {
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <StyledButton
      {...props}
      $special={$special}
      onClick={handleClickNavigation}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
