import Button from "../../../components/Button";
import Section from "../../../components/Section";
import { Image } from "../../../components/Image";
import errorIcon from "./errorIcon.svg";

const NotFound = () => {
  return (
    <Section header="page not found - 404" title="Ooops...don't worry." $center>
      <Image src={errorIcon} alt="Cat Error Icon" />
      <p>The page you're looking for isn't available. Please return to Home.</p>
      <Button redirectPath="/">Go Home</Button>
    </Section>
  );
};

export default NotFound;
