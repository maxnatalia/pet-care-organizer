import { ComponentProps, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./styled";

type ButtonProps = {
  children: ReactNode;
  redirectPath?: string;
  onClick?: () => void;
  $special?: boolean;
  $edit?: boolean;
  $delete?: boolean;
} & ComponentProps<typeof StyledButton>;

const Button = ({
  children,
  redirectPath,
  onClick,
  $special = false,
  $edit = false,
  $delete = false,
  ...props
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirectPath) {
      navigate(redirectPath);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      {...props}
      $special={$special}
      $edit={$edit}
      $delete={$delete}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
