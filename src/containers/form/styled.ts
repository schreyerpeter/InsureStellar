import styled, { css } from 'styled-components';

export const BaseButton = css`
  margin-right: 0;
  margin-left: 0;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: #1c53e7;
  font-family: Montserrat, sans-serif;
  text-align: center;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: white;
  outline: none;
  border: 1px solid transparent;
  height: 48px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    background-color: #4975ec;
  }

  :active {
    border: 1px solid white;
    border-radius: 4px;
  }
`;

export const BaseFormInput = css`
  height: 48px;
  margin-bottom: 0;
  padding: 3px 0 0 18px;
  border-color: rgba(20, 20, 20, 0.1);
  border-radius: 6px;
  -webkit-transition: border 0.2s ease;
  transition: border 0.2s ease;
  font-family: Montserrat, sans-serif;
  color: #141414;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  position: relative;
  ${({ inputError }: { inputError: any }) =>
    inputError && 'border: 2px solid red;'}
  @media (max-width: 992px) {
    grid-column: span 2;
  }
`;

export const BaseForm = css`
  margin: 0 16px;
  display: grid;
  max-width: 480px;
  grid-template-rows: auto auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

export const FormContainer = styled.div`
  margin: 2vmin auto 2vmin auto;
`;

export const FormInput = styled.input`
  ${BaseFormInput}
`;

export const Form = styled.form`
  ${BaseForm}
`;

export const SubmitButton = styled.input`
  ${BaseButton}
`;
