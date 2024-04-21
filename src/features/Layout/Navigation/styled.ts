import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

type SpecialProps = {
  $special: boolean;
};

export const StyledNavigation = styled.nav`
  grid-area: nav;
  background: ${({ theme }) => theme.color.backgroundSecondary};
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
  }
`;

export const StyledNavLink = styled(NavLink)<SpecialProps>`
  text-decoration: none;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.active {
    background: ${({ theme }) => theme.color.backgroundPrimary};
    pointer-events: none;
  }

  &:hover {
    background: ${({ theme }) => theme.color.backgroundPrimary};
    border-bottom: 2px solid ${({ theme }) => theme.color.special};
  }

  ${({ $special }) =>
    $special &&
    css`
      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.color.special};
      }
    `}
`;

export const Label = styled.span<SpecialProps>`
  font-size: 26px;
  color: ${({ theme }) => theme.color.textPrimary};

  ${({ $special }) =>
    $special &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.color.special};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;

export const styledIcon = (Icon: React.ComponentType) => styled(
  Icon
)<SpecialProps>`
  font-size: 46px;
  color: ${({ theme }) => theme.color.textPrimary};
  transition: color 0.3s ease-in-out;

  ${({ $special }) =>
    $special &&
    css`
      color: ${({ theme }) => theme.color.special};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 26px;
  }
`;
