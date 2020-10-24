import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
// ts-expect-error
import * as Yup from 'yup';

import { FormContainer, FormInput, Form, SubmitButton } from './styled';
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
  const initialValues = {
    first_name: '',
    last_name: '',
    line_1: '',
    line_2: '',
    city: '',
    region: '',
    postal: '',
  };

  const SubmitSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    line_1: Yup.string().required('Address is required'),
    line_2: Yup.string(),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('Region is required'),
    postal: Yup.number().required('Postal code is required'),
  });

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
              <FormInput
                type="first_name"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                inputError={errors.first_name && touched.first_name}
                className="form-input"
              />
              <FormInput
                type="last_name"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                inputError={errors.last_name && touched.last_name}
                className="form-input"
              />
              <label htmlFor="address">Address</label>
              <FormInput
                type="line_1"
                name="line_1"
                id="line_1"
                placeholder="Address Line 1"
                value={values.line_1}
                onChange={handleChange}
                onBlur={handleBlur}
                inputError={errors.line_1 && touched.line_1}
                className={`form-input full-row ${
                  errors.line_1 && touched.line_1 ? 'input-error' : ''
                }`}
              />
              <FormInput
                type="line_2"
                name="line_2"
                id="line_2"
                placeholder="Address Line 2"
                value={values.line_2}
                onChange={handleChange}
                onBlur={handleBlur}
                inputError={errors.line_2 && touched.line_2}
                className="full-row"
              />
              <FormInput
                type="city"
                name="city"
                id="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                inputError={errors.city && touched.city}
                className="full-row"
              />
              <FormInput
                type="region"
                name="region"
                id="region"
                placeholder="Region"
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
                inputError={errors.region && touched.region}
                className="form-input"
              />
              <FormInput
                type="postal"
                name="postal"
                id="postal"
                placeholder="Postal"
                value={values.postal}
                onChange={handleChange}
                onBlur={handleBlur}
                inputError={errors.postal && touched.postal}
                className="form-input"
              />
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

export default withRouter(
  connect(null, mapDispatchToProps)(RatingInformationForm),
);
