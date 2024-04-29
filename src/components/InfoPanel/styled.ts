import styled, { css } from "styled-components";

export const StyledInfoPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.span<{ $extra?: boolean }>`
  margin: 10px;
  padding: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.textPrimary};
  opacity: 0.8;

  ${({ $extra }) =>
    $extra &&
    css`
      color: ${({ theme }) => theme.color.backgroundPrimary};
      font-weight: 700;
      font-size: 22px;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  padding-top: 2px;
  border-top: 1px solid ${({ theme }) => theme.color.textPrimary};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
`;

export const Detail = styled.span`
  color: ${({ theme }) => theme.color.textPrimary};
  text-transform: capitalize;
  font-weight: 500;
`;
