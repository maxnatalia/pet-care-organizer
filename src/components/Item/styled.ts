import styled from "styled-components";

export const StyledItem = styled.li`
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    min-width: 100%;
  }
`;

export const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.special};
`;

export const ChildrenBox = styled.div`
  flex: 1;
  padding-bottom: 30px;
`;

export const Box = styled.div`
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.color.textPrimary};
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  text-align: center;
`;

export const Caption = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const Detail = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};
  font-weight: 500;
  font-size: 14px;
`;
