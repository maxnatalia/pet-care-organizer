import styled from "styled-components";

export const InputField = styled.input<{ $error?: boolean }>`
  margin: 20px 0;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  outline: none;
  border: 4px solid;
  border-color: ${({ $error, theme }) =>
    $error ? theme.color.delete : theme.color.textPrimary};
`;
