import { ComponentProps, ReactNode } from "react";
import Button from "../../../../components/Button";
import { FieldsWrapper, StyledForm, Wrapper } from "./styled";

type FormProps = {
  children: ReactNode;
} & ComponentProps<typeof StyledForm>;

const Form = ({ children, ...props }: FormProps) => {
  return (
    <StyledForm {...props}>
      <FieldsWrapper>{children}</FieldsWrapper>
      <Wrapper>
        <Button type="submit">Add</Button>
        <Button type="button" redirectPath="/">
          Cancel
        </Button>
      </Wrapper>
    </StyledForm>
  );
};

export default Form;
