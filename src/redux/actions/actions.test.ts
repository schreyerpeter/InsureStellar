// @ts-expect-error
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from '../action-types';
import fetchMock from 'fetch-mock';

import { mockQuote } from '../../mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('creates CREATE_QUOTE_SUCCESS', () => {
    fetchMock.postOnce('/quotes', {
      body: mockQuote,
      headers: { 'content-type': 'application/json' },
    });
    const expectedActions = [
      { type: types.CREATE_QUOTE_FETCHING },
      { type: types.CREATE_QUOTE_SUCCESS, payload: mockQuote },
    ];
    const store = mockStore({ quoteData: mockQuote });

    return store
      .dispatch(
        actions.createQuote({
          first_name: 'Elon',
          last_name: 'Musk',
          line_1: 'Mars',
          line_2: '',
          city: 'Marsville',
          region: 'North Mars',
          postal: '45454',
        }),
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('creates CREATE_QUOTE_ERROR', () => {
    fetchMock.postOnce('/quotes', () => {
      throw new Error('Something failed');
    });
    const expectedActions = [
      { type: types.CREATE_QUOTE_FETCHING },
      { type: types.CREATE_QUOTE_ERROR },
    ];
    const store = mockStore({ quoteData: mockQuote });

    return store
      .dispatch(
        actions.createQuote({
          first_name: 'Elon',
          last_name: 'Musk',
          line_1: 'Mars',
          line_2: '',
          city: 'Marsville',
          region: 'North Mars',
          postal: '45454',
        }),
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('creates UPDATE_QUOTE_SUCCESS', () => {
    fetchMock.putOnce('/quotes/UP7848281', {
      body: mockQuote,
      headers: { 'content-type': 'application/json' },
    });
    const expectedActions = [
      { type: types.UPDATE_QUOTE_FETCHING },
      { type: types.UPDATE_QUOTE_SUCCESS, payload: mockQuote },
    ];
    const store = mockStore({ quoteData: mockQuote });
    store.getState = () => ({ quoteData: mockQuote });

    return store.dispatch(actions.updateQuote({ deductible: 12 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates UPDATE_QUOTE_ERROR', () => {
    fetchMock.putOnce('/quotes/UP7848281', () => {
      throw new Error('Something failed');
    });
    const expectedActions = [
      { type: types.UPDATE_QUOTE_FETCHING },
      { type: types.UPDATE_QUOTE_ERROR },
    ];
    const store = mockStore({ quoteData: mockQuote });
    store.getState = () => ({ quoteData: mockQuote });

    return store.dispatch(actions.updateQuote({ deductible: 12 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
