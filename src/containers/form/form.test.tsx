import React from 'react';
import { cleanup, render, fireEvent, act, wait } from '@testing-library/react';

import { RatingInformationForm } from '.';
import { mockQuote } from '../../mocks';

const setup = (props = { quote: mockQuote }) =>
  render(<RatingInformationForm {...props} />);

describe('RatingInformationForm', () => {
  afterEach(cleanup);

  it('should render the form with its inputs', () => {
    const { getByPlaceholderText, getByText } = setup();
    expect(getByPlaceholderText(/first name/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/last name/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/address line 1/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/address line 2/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/city/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/region/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/postal/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
  });

  it('should render error state if form is submitted with invalid fields', async (done) => {
    const { getByPlaceholderText, getByText } = setup();
    const firstName = getByPlaceholderText(/first name/i);
    act(() => {
      fireEvent.change(firstName, { target: { value: 'Elon' } });
    });
    await wait();
    expect(firstName.value).toBe('Elon');
    const submitButton = getByText(/submit/i);
    act(() => {
      fireEvent.submit(submitButton);
    });
    await wait();
    const lastName = getByPlaceholderText(/last name/i);
    const style = window.getComputedStyle(lastName);
    expect(style.border).toBe('2px inset');
    done();
  });

  xit('should submit the form and call createQuote', async (done) => {
    const push = jest.fn();
    const createQuote = jest.fn();
    const { getByPlaceholderText, getByTestId } = setup({
      quote: { ...mockQuote },
      history: { push },
      createQuote,
    });
    const firstName = getByPlaceholderText(/first name/i);
    act(() => {
      fireEvent.change(firstName, { target: { value: 'Elon' } });
    });
    act(() => {});
    const lastName = getByPlaceholderText(/last name/i);
    await wait();
    act(() => {
      fireEvent.change(lastName, { target: { value: 'Musk' } });
    });
    const address = getByPlaceholderText(/address line 1/i);
    await wait();
    act(() => {
      fireEvent.change(address, { target: { value: '123 Mars Rd.' } });
    });
    const city = getByPlaceholderText(/city/i);
    await wait();
    act(() => {
      fireEvent.change(city, { target: { value: 'Marsville' } });
    });
    const postal = getByPlaceholderText(/postal/i);
    await wait();
    act(() => {
      fireEvent.change(postal, { target: { value: '345345' } });
    });
    const region = getByPlaceholderText(/region/i);
    await wait();
    act(() => {
      fireEvent.change(region, { target: { value: 'North Mars' } });
    });
    const form = getByTestId(/rating-form/i);

    await wait();
    act(() => {
      fireEvent.submit(form);
    });
    await wait();
    // TODO: Figure out why Formik makes testing so difficult
    expect(createQuote).toHaveBeenCalled();
  });
});
