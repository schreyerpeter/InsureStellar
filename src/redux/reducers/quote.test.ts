import QuoteReducer from './quote';
import { mockQuote } from '../../mocks';

const initialState = {
  hasError: false,
  isFetching: false,
  quote: {},
};

describe('QuoteReducer', () => {
  describe('Creating a quote', () => {
    it('should return state if no action type matches', () => {
      const action = { type: 'NO_MATCH' };
      expect(QuoteReducer(undefined, action)).toEqual(initialState);
    });
    it('should return isFetching true', () => {
      const action = { type: 'CREATE_QUOTE_FETCHING' };
      expect(QuoteReducer(undefined, action)).toEqual(
        Object.assign({}, initialState, { isFetching: true }),
      );
    });
    it('should return hasError true', () => {
      const action = { type: 'CREATE_QUOTE_ERROR' };
      expect(QuoteReducer(undefined, action)).toEqual(
        Object.assign({}, initialState, { hasError: true }),
      );
    });
    it('should return updated state', () => {
      const payload = mockQuote;
      const action = { type: 'CREATE_QUOTE_SUCCESS', payload };
      expect(QuoteReducer(undefined, action)).toEqual({
        ...mockQuote,
        hasError: false,
        isFetching: false,
      });
    });
  });
  describe('Updating a quote', () => {
    it('should return isFetching true', () => {
      const action = { type: 'UPDATE_QUOTE_FETCHING' };
      expect(QuoteReducer(undefined, action)).toEqual(
        Object.assign({}, initialState, { isFetching: true }),
      );
    });
    it('should return hasError true', () => {
      const action = { type: 'UPDATE_QUOTE_ERROR' };
      expect(QuoteReducer(undefined, action)).toEqual(
        Object.assign({}, initialState, { hasError: true }),
      );
    });
    it('should return updated state', () => {
      const payload = mockQuote;
      const action = { type: 'UPDATE_QUOTE_SUCCESS', payload };
      expect(QuoteReducer(undefined, action)).toEqual({
        hasError: false,
        isFetching: false,
        ...mockQuote,
      });
    });
  });
});
