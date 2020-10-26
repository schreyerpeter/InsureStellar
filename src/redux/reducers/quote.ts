import * as actionTypes from '../action-types';

export default function (
  state = { quote: {}, isFetching: false, hasError: false },
  action: any,
) {
  switch (action.type) {
    case actionTypes.CREATE_QUOTE_FETCHING:
      return Object.assign({}, state, { isFetching: true });
    case actionTypes.CREATE_QUOTE_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload.quote,
        isFetching: false,
      });
    case actionTypes.CREATE_QUOTE_ERROR:
      return Object.assign({}, state, { hasError: true, isFetching: false });
    case actionTypes.UPDATE_QUOTE_FETCHING:
      return Object.assign({}, state, { isFetching: true });
    case actionTypes.UPDATE_QUOTE_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload.quote,
        isFetching: false,
      });
    case actionTypes.UPDATE_QUOTE_ERROR:
      return Object.assign({}, state, { hasError: true, isFetching: false });
    default:
      return state;
  }
}
