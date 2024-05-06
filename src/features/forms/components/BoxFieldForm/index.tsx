import { ReactNode } from "react";
import { StyledBoxFieldForm, Wrapper } from "./styled";

type BoxFieldFormProps = {
  children: ReactNode;
  label: string;
  $row?: boolean;
  error?: boolean;
};

const BoxFieldForm = ({
  children,
  label,
  $row = false,
  error = false,
}: BoxFieldFormProps) => {
  return (
    <StyledBoxFieldForm>
      <label>{label}</label>
      <Wrapper $row={$row}>{children}</Wrapper>
      {error && <p>Error Msg!</p>}
    </StyledBoxFieldForm>
  );
};

export default BoxFieldForm;
