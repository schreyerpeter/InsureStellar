import { combineReducers } from 'redux';
import quoteReducer from './quote';

const insureStellarApp = combineReducers({
  quoteData: quoteReducer,
});

export default insureStellarApp;
