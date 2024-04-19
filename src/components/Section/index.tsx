import { ReactNode } from "react";
import { SectionHeader, StyledSection } from "./styled";

type SectionProps = {
  header: string;
  children: ReactNode;
};

const Section = ({ header, children }: SectionProps) => {
  return (
    <StyledSection>
      <SectionHeader>{header}</SectionHeader>
      {children}
    </StyledSection>
  );
};

export default Section;
