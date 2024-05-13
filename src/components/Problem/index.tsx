import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import Button from "../Button";
import Section from "../Section";
import petIcon from "./petIcon.svg";
import { Image } from "./styled";

type ProblemProps = {
  error?: boolean;
};

const Problem = ({ error = false }: ProblemProps) => {
  const navigate = useNavigate();
  return (
    <Section
      header={error ? "page not found - 404" : "Empty List"}
      title={"Ooops...don't worry."}
      $center
    >
      <Image src={petIcon} alt="Cat Error Icon" />
      {!error && <p>Start adding items to the list.</p>}
      {error && (
        <p>
          The page you're looking for isn't available. Please return to Home.
        </p>
      )}
      <Button $variety="default" title="Go Home" onClick={() => navigate("/")}>
        <MdHome />
        <span>Go Home</span>
      </Button>
    </Section>
  );
};

export default Problem;
