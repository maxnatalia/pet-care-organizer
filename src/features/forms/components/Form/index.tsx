import { ComponentProps, ReactNode } from "react";
import Button from "../../../../components/Button";
import { FieldsWrapper, StyledForm, Wrapper, Asterisk } from "./styled";
import { useNavigate } from "react-router-dom";

type FormProps = {
  children: ReactNode;
  onCancelForm: () => void;
  editableForm: boolean;
} & ComponentProps<typeof StyledForm>;

const Form = ({
  children,
  onCancelForm,
  editableForm,
  ...props
}: FormProps) => {
  const navigate = useNavigate();

  return (
    <StyledForm {...props}>
      <FieldsWrapper>{children}</FieldsWrapper>
      <Wrapper>
        <Button
          $variety="default"
          type="submit"
          title={editableForm ? "Add your new pet" : "Save changes"}
        >
          {editableForm ? "ADD" : "SAVE"}
        </Button>
        <Button
          $variety="special"
          type="button"
          onClick={onCancelForm}
          title={"Exit the Form"}
        >
          Cancel
        </Button>
        <Button
          $variety="default"
          onClick={() => navigate("/")}
          title="Go back to the HOME"
        >
          Go Home
        </Button>
      </Wrapper>
      <Asterisk>* Fields marked with an asterisk are required</Asterisk>
    </StyledForm>
  );
};

export default Form;
