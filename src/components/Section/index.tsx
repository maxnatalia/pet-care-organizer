import { ReactNode } from "react";
import { SectionHeader, StyledSection, Title, Wrapper } from "./styled";

type SectionProps = {
  header: string;
  title?: string;
  $center?: boolean;
  children: ReactNode;
};

const Section = ({
  header,
  title,
  $center = false,
  children,
}: SectionProps) => {
  return (
    <StyledSection>
      <SectionHeader>{header}</SectionHeader>
      <Wrapper $center={$center}>
        {title && <Title>{title}</Title>}
        {children}
      </Wrapper>
    </StyledSection>
  );
};

export default Section;
