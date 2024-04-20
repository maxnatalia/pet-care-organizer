import styled, { css } from "styled-components";
import { MdPets } from "react-icons/md";
import { FaSun, FaMoon, FaPaw } from "react-icons/fa";

type PointerIconProps = {
  $moveToRight: boolean;
};

export const StyledHeader = styled.header`
  grid-area: header;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.backgroundSecondary};
  padding: 20px;
`;

export const Logo = styled(MdPets)`
  margin: 10px;
  font-size: 50px;
  color: ${({ theme }) => theme.color.special};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ThemeText = styled.span`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;

export const ThemeBox = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border: 2px solid ${({ theme }) => theme.color.textPrimary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const LightIcon = styled(FaSun)`
  color: yellow;
  font-size: 16px;
`;

export const DarkIcon = styled(FaMoon)`
  color: gray;
  font-size: 16px;
`;

export const PointerIcon = styled(FaPaw)<PointerIconProps>`
  color: ${({ theme }) => theme.color.special};
  font-size: 36px;
  padding: 6px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border: 2px solid ${({ theme }) => theme.color.textPrimary};
  border-radius: 50%;
  position: absolute;
  left: -4px;
  top: -6px;
  transition: all 0.5s ease-in-out;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(30px);
    `}
`;
