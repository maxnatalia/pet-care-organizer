import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  padding: 20px;
  margin: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0;
    margin: 10px;
  }
`;

export const SectionHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    padding: 10px;
  }
`;

export const Wrapper = styled.div<{ $center?: boolean; $wrap?: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $center }) =>
    $center &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${({ $wrap }) =>
    $wrap &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
