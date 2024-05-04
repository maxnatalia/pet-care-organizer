import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 40px;
  width: 80%;
  border: 1px solid red;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0;
  }
`;

export const FieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
