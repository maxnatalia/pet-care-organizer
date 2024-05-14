import styled from "styled-components";

export const Wrapper = styled.div<{ $row?: boolean }>`
  display: ${({ $row }) => ($row ? "flex" : "")};
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const ErrorMsg = styled.p`
  margin: 0;
  color: red;
`;
