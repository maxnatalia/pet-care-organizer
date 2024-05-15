import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 1400px;
  margin: 40px auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "footer";
    padding: 10px;
  }
`;

export const Main = styled.main`
  grid-area: main;
  padding: 20px;
  background: ${({ theme }) => theme.color.backgroundSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 10px;
  }
`;
