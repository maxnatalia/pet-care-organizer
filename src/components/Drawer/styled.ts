import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

export const StyledDrawer = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 80px;
  right: 10px;
`;

export const CloseIcon = styled(FaRegWindowClose)`
  align-self: center;
  margin: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.color.special};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.backgroundPrimary};
    background-color: ${({ theme }) => theme.color.special};
  }
`;
