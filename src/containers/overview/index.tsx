import React, { Fragment } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
// ts-expect-error
import * as Yup from 'yup';

import {
  FormContainer,
  FormInput,
  Form,
  SubmitButton,
  ReturnButton,
  ErrorMessage,
} from './styled';
import { createQuote } from '../../redux/actions';
import '../../App.css';

function RatingInformationForm(props: any) {
  const submitForm = async (values: any) => {
    const { createQuote, history } = props;
    const success = await createQuote(values);
    if (success) {
      history.push('/overview');
    }
  };
  const { variable_options: variableOptions } = props.quote;

  const initialValues = {};

  const SubmitSchema = Yup.object().shape({});

  console.log(props.quote);
  if (!variableOptions) {
    return (
      <ErrorMessage>
        <p>Something went wrong.</p>
        <ReturnButton
          onClick={() => {
            props.history.push('/');
          }}
        >
          Return to homepage
        </ReturnButton>
      </ErrorMessage>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SubmitSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        } = formik;
        return (
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              {Object.keys(variableOptions).map((option) => (
                <Fragment key={variableOptions[option].title}>
                  <label htmlFor={option}>
                    {variableOptions[option].title}
                  </label>
                  <FormInput as="select" name={option} key={option}>
                    {variableOptions[option].values.map((value: any) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </FormInput>
                </Fragment>
              ))}
              <SubmitButton
                value="Submit"
                type="submit"
                className="submit-button"
              />
            </Form>
          </FormContainer>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ createQuote }, dispatch);
};

const mapStateToProps = (state: any) => {
  return { quote: state.quote };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RatingInformationForm),
);
