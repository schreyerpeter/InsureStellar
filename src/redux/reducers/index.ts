import { combineReducers } from 'redux';
import quoteReducer from './quote';

const insureStellarApp = combineReducers({
  quote: quoteReducer,
});

export default insureStellarApp;
