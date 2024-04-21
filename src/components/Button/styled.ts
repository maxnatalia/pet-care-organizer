import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 10px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.special};
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.special};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.special};
    color: ${({ theme }) => theme.color.backgroundPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;