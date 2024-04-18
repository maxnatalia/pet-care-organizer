import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-area: footer;
  margin-top: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.color.backgroundSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 10px;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
  }
`;

export const Mail = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 32px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.special};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const styledIcon = (Icon: React.ComponentType) => styled(Icon)`
  width: 60px;
  height: 60px;
  color: ${({ theme }) => theme.color.special};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 40px;
    height: 40px;
  }
`;

export const Author = styled.div`
  text-align: center;
  font-weight: 500;
`;
