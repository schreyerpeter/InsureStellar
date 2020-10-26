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

export const ReturnButton = styled.button`
  ${BaseButton}
`;

export const ErrorMessage = styled.div``;

export const StyledLabel = styled.label`
  @media (max-width: 992px) {
    grid-column: span 2;
  }
  span {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const OverviewContainer = styled.div`
  padding: 0;
`;

export const Title = styled.h2`
  font-size: 3rem;
`;
