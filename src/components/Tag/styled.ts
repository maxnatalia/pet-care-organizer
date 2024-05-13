import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledTag = styled(Link)<{ $special?: boolean }>`
  margin: 10px;
  padding: 4px 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};
  display: inline-flex;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.color.textPrimary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.backgroundSecondary};
    background-color: ${({ theme }) => theme.color.textPrimary};
  }

  ${({ $special }) =>
    $special &&
    css`
      color: ${({ theme }) => theme.color.special};
      border: 2px solid ${({ theme }) => theme.color.special};

      &:hover {
        color: ${({ theme }) => theme.color.backgroundPrimary};
        background-color: ${({ theme }) => theme.color.special};
      }
    `}
`;
