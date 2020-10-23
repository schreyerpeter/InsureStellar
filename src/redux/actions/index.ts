import * as actionTypes from '../action-types';
import { FormValuesType } from '../../types';

const BASE_URL = 'https://fed-challenge-api.sure.now.sh';

export const createQuote = (fields: FormValuesType) => async (
  dispatch: Function,
) => {
  dispatch({
    type: actionTypes.CREATE_QUOTE_FETCHING,
  });
  const {
    first_name,
    last_name,
    line_1,
    line_2,
    city,
    region,
    postal,
  } = fields;
  const data = {
    first_name,
    last_name,
    address: {
      line_1,
      line_2,
      city,
      region,
      postal,
    },
  };
  try {
    const result = await fetch(`${BASE_URL}/api/v1/quotes`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const json = await result.json();
    dispatch({
      type: actionTypes.CREATE_QUOTE_SUCCESS,
      payload: json,
    });
    return true;
  } catch (err) {
    dispatch({
      type: actionTypes.CREATE_QUOTE_ERROR,
    });
    return false;
  }
};
