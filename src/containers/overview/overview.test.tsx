import { Overview } from '.';
import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { mockQuote } from '../../mocks';

const setup = () => render(<Overview quote={mockQuote} />);

describe('Overview', () => {
  afterEach(cleanup);

  it('should render the component', async () => {
    const { getByTestId } = setup();
    expect(getByTestId('title')).toBeInTheDocument();
  });
});
