import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
`;

export const SectionHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;
