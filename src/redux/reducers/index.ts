import { combineReducers } from 'redux';
import newQuoteReducer from './create-quote';

const insureStellarApp = combineReducers({
  quote: newQuoteReducer,
});

export default insureStellarApp;
