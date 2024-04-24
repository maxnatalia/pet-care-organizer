import styled, { css } from "styled-components";

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

export const Wrapper = styled.div<{ $center?: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $center }) =>
    $center &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
