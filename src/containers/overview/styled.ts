import styled from 'styled-components';
import { Field } from 'formik';
import { BaseButton, BaseFormInput, BaseForm } from '../form/styled';

export const FormContainer = styled.div`
  margin: 2vmin auto 2vmin auto;
`;

export const FormInput = styled(Field)`
  ${BaseFormInput}
`;

export const Form = styled.form`
  ${BaseForm}
`;

export const SubmitButton = styled.input`
  ${BaseButton}
`;

export const ReturnButton = styled.button`
  ${BaseButton}
`;

export const ErrorMessage = styled.div`
  margin-left: 16px;
`;
