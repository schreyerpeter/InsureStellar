import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import { Overview } from '.';
import { mockQuote } from '../../mocks';

const setup = (props = { quote: mockQuote }) => render(<Overview {...props} />);

describe('Overview', () => {
  afterEach(cleanup);

  it('should render the component with quote data', () => {
    const { getByText } = setup();
    expect(getByText(/asteroid collision limit/i)).toBeInTheDocument();
    expect(
      getByText(/Your annual premium is \$26,000.00/i),
    ).toBeInTheDocument();
    expect(getByText(/Deductible/i)).toBeInTheDocument();
  });

  it('should render the no data state and call history API method on click', () => {
    const returnToHomepage = jest.fn();
    const { getByText } = setup({
      history: { push: returnToHomepage },
      quote: { quote: {} },
    });
    expect(getByText(/something went wrong/i)).toBeInTheDocument();
    const returnButton = getByText(/return to homepage/i);
    fireEvent.click(returnButton);
    expect(returnToHomepage).toHaveBeenCalled();
  });

  it('should render the error state', () => {
    const { getByText } = setup({
      quote: { ...mockQuote, hasError: true },
    });
    expect(
      getByText(/something went wrong. please try again./i),
    ).toBeInTheDocument();
  });

  it('should call updateQuote upon choosing a dropdown item', () => {
    const updateQuote = jest.fn();
    const { getByTestId } = setup({
      quote: { ...mockQuote },
      updateQuote,
    });
    const dropdown = getByTestId(/deductible-dropdown/i);
    fireEvent.change(dropdown, { currentTarget: { value: 500 } });
    expect(updateQuote).toHaveBeenCalledWith({ deductible: 500 });
  });
});
