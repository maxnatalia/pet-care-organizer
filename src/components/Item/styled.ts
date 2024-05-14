import styled, { css } from "styled-components";

export const StyledItem = styled.li<{ $card?: boolean }>`
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
  }

  ${({ $card }) =>
    $card &&
    css`
      width: 100%;
    `}
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

export const ChildrenBox = styled.div<{ $card?: boolean }>`
  flex: 1;
  padding-bottom: 30px;

  ${({ $card }) =>
    $card &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
      }
    `}
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
