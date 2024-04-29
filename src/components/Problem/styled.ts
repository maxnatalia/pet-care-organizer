import styled from "styled-components";

export const Image = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 220px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 180px;
  }
`;
