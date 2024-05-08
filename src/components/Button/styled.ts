import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  $type: "edit" | "delete" | "special" | "default";
}>`
  margin: 10px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }

  ${({ $type }) =>
    $type === "default" &&
    css`
      border-color: ${({ theme }) => theme.color.textPrimary};
      color: ${({ theme }) => theme.color.textPrimary};
      background-color: ${({ theme }) => theme.color.backgroundSecondary};

      &:hover {
        background-color: ${({ theme }) => theme.color.textPrimary};
        color: ${({ theme }) => theme.color.backgroundSecondary};
      }
    `}

  ${({ $type }) =>
    $type === "special" &&
    css`
      border-color: ${({ theme }) => theme.color.special};
      color: ${({ theme }) => theme.color.special};
      background-color: ${({ theme }) => theme.color.backgroundSecondary};

      &:hover {
        background-color: ${({ theme }) => theme.color.special};
        color: ${({ theme }) => theme.color.backgroundPrimary};
      }
    `}

  ${({ $type }) =>
    $type === "edit" &&
    css`
      border-color: ${({ theme }) => theme.color.edit};
      color: ${({ theme }) => theme.color.edit};
      background-color: ${({ theme }) => theme.color.backgroundSecondary};

      &:hover {
        background-color: ${({ theme }) => theme.color.edit};
        color: ${({ theme }) => theme.color.backgroundPrimary};
      }
    `}

    ${({ $type }) =>
    $type === "delete" &&
    css`
      border-color: ${({ theme }) => theme.color.delete};
      color: ${({ theme }) => theme.color.delete};
      background-color: ${({ theme }) => theme.color.backgroundSecondary};

      &:hover {
        background-color: ${({ theme }) => theme.color.delete};
        color: ${({ theme }) => theme.color.backgroundPrimary};
      }
    `}
`;
