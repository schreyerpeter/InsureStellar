import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// ts-expect-error
import * as Yup from 'yup';
import { FormValuesType, FormErrorsType } from './types';
import '../../App.css';

function RatingInformationForm() {
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log('howdy');
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
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="first_name"
                name="first_name"
                id="first_name"
                placeholder={'First Name'}
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${
                  errors.first_name && touched.first_name ? 'input-error' : ''
                }`}
              />
              <ErrorMessage
                name="first_name"
                component="span"
                className="error-message"
              />
              <input
                type="last_name"
                name="last_name"
                id="last_name"
                placeholder={'Last Name'}
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${
                  errors.last_name && touched.last_name ? 'input-error' : ''
                }`}
              />
              <label htmlFor="address">Address</label>
              <input
                type="line_1"
                name="line_1"
                id="line_1"
                placeholder={'Address Line 1'}
                value={values.line_1}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input full-row ${
                  errors.line_1 && touched.line_1 ? 'input-error' : ''
                }`}
              />
              <input
                type="line_2"
                name="line_2"
                id="line_2"
                placeholder={'Address Line 2'}
                value={values.line_2}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input full-row ${
                  errors.line_2 && touched.line_2 ? 'input-error' : ''
                }`}
              />
              <input
                type="city"
                name="city"
                id="city"
                placeholder={'City'}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input full-row ${
                  errors.city && touched.city ? 'input-error' : ''
                }`}
              />
              <input
                type="region"
                name="region"
                id="region"
                placeholder={'Region'}
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${
                  errors.region && touched.region ? 'input-error' : ''
                }`}
              />
              <input
                type="postal"
                name="postal"
                id="postal"
                placeholder={'Postal'}
                value={values.postal}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${
                  errors.postal && touched.postal ? 'input-error' : ''
                }`}
              />
              <input value="Submit" type="submit" className="submit-button" />
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default RatingInformationForm;
