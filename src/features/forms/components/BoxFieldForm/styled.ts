import styled from "styled-components";

export const StyledBoxFieldForm = styled.div`
  border: 2px solid yellow;
`;

export const Wrapper = styled.div<{ $row?: boolean }>`
  display: ${({ $row }) => ($row ? "flex" : "")};
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
