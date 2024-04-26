import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  $special?: boolean;
  $edit?: boolean;
  $delete?: boolean;
}>`
  margin: 10px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.special};
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.special};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.special};
    color: ${({ theme }) => theme.color.backgroundPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }

  ${({ $special }) =>
    $special &&
    css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.special};
      color: ${({ theme }) => theme.color.backgroundPrimary};

      &:hover {
        color: ${({ theme }) => theme.color.special};
        background-color: ${({ theme }) => theme.color.backgroundSecondary};
      }
    `}

  ${({ $edit }) =>
    $edit &&
    css`
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.color.edit};
      color: ${({ theme }) => theme.color.backgroundPrimary};
      background-color: ${({ theme }) => theme.color.edit};

      &:hover {
        background-color: ${({ theme }) => theme.color.backgroundSecondary};
        color: ${({ theme }) => theme.color.edit};
      }
    `}

    ${({ $delete }) =>
    $delete &&
    css`
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.color.delete};
      color: ${({ theme }) => theme.color.backgroundPrimary};
      background-color: ${({ theme }) => theme.color.delete};

      &:hover {
        background-color: ${({ theme }) => theme.color.backgroundSecondary};
        color: ${({ theme }) => theme.color.delete};
      }
    `}
`;
