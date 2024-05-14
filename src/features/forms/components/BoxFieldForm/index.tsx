import { ReactNode } from "react";
import { ErrorMsg, Label, Wrapper } from "./styled";

type BoxFieldFormProps = {
  children: ReactNode;
  label: string;
  $row?: boolean;
  error?: boolean;
  errorMsg?: string;
};

const BoxFieldForm = ({
  children,
  label,
  $row = false,
  error = false,
  errorMsg = "Error Msg!",
}: BoxFieldFormProps) => {
  return (
    <div>
      <Label>{label}</Label>
      <Wrapper $row={$row}>{children}</Wrapper>
      {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </div>
  );
};

export default BoxFieldForm;
