import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 20px 14px;
    gap: 20px;
  }
`;
