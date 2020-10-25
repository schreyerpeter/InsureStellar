import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import {
  FormContainer,
  FormInput,
  Form,
  ReturnButton,
  ErrorMessage,
  StyledLabel,
} from './styled';

import { updateQuote } from '../../redux/actions';

function RatingInformationForm(props: any) {
  const handleChange = async (e: any, option: string) => {
    const { updateQuote } = props;
    await updateQuote({ [option]: parseInt(e.currentTarget.value, 10) });
  };
  const { variable_options: variableOptions, premium } = props.quote;

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
    <Fragment>
      <h2>Your annual premium is ${premium.toFixed(2)}</h2>
      <FormContainer>
        <Form>
          {Object.keys(variableOptions).map((option) => (
            <Fragment key={variableOptions[option].title}>
              <StyledLabel htmlFor={option}>
                {variableOptions[option].title}
                <br />
                <span>{variableOptions[option].description}</span>
              </StyledLabel>
              <FormInput
                as="select"
                name={option}
                key={option}
                onChange={(e: any) => {
                  handleChange(e, option);
                }}
              >
                {variableOptions[option].values.map((value: any) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </FormInput>
            </Fragment>
          ))}
        </Form>
      </FormContainer>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ updateQuote }, dispatch);
};

const mapStateToProps = (state: any) => {
  return { quote: state.quote };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RatingInformationForm),
);
