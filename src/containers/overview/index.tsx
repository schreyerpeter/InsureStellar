import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { AppStateType } from '../../types';
import {
  FormContainer,
  FormInput,
  Form,
  ReturnButton,
  ErrorMessage,
  StyledLabel,
  OverviewContainer,
  Title,
} from './styled';
import { updateQuote } from '../../redux/actions';

export function Overview(props: any) {
  const handleChange = async (e: any, option: string) => {
    const { updateQuote } = props;
    await updateQuote({ [option]: parseInt(e.currentTarget.value, 10) });
  };
  const {
    quote: { variable_options: variableOptions, premium },
    isFetching,
    hasError,
  } = props.quote;

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
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <OverviewContainer>
      <Title data-testid="title">
        Your annual premium is {formatter.format(premium)}
      </Title>
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
                disabled={isFetching}
                as="select"
                name={option}
                key={option}
                data-testid={`${option}-dropdown`}
                onChange={(e: any) => {
                  handleChange(e, option);
                }}
              >
                {variableOptions[option].values.map((value: number) => (
                  <option key={value} value={value}>
                    {formatter.format(value)}
                  </option>
                ))}
              </FormInput>
            </Fragment>
          ))}
        </Form>
      </FormContainer>
      {hasError && (
        <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
      )}
    </OverviewContainer>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ updateQuote }, dispatch);
};

const mapStateToProps = (state: AppStateType) => {
  return { quote: state.quoteData };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Overview),
);
