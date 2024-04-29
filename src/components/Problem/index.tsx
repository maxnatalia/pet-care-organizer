import Button from "../Button";
import Section from "../Section";
import { Image } from "./styled";
import petIcon from "./petIcon.svg";

type ProblemProps = {
  error?: boolean;
};

const Problem = ({ error = false }: ProblemProps) => {
  return (
    <Section
      header={error ? "page not found - 404" : "Empty List"}
      title={"Ooops...don't worry."}
      $center
    >
      <Image src={petIcon} alt="Cat Error Icon" />
      <p>Start adding items to the list.</p>
      {error && (
        <p>
          The page you're looking for isn't available. Please return to Home.
        </p>
      )}
      <Button redirectPath="/">Go Home</Button>
    </Section>
  );
};

export default Problem;
