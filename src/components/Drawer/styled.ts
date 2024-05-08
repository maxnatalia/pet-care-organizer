import styled from "styled-components";

export const StyledDrawer = styled.div`
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 10px;
  border: 4px solid ${({ theme }) => theme.color.backgroundPrimary};
  display: flex;
  justify-content: center;
  position: absolute;
  top: -30px;
  right: 10px;
  z-index: 2;
`;
