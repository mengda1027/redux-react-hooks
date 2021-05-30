import { getExchangeRates } from '../api';
export const supportedCurrencies = ['USD', 'EUR', 'JPY', 'CAD', 'GBP', 'MXN'];

const initialState = {
  amount: '12.99',
  currencyCode: 'EUR',
  currencyData: { USD: 1.0 }
};

// action types
export const AMOUNT_CHANGED = 'rate/amountChanged';
export const CURRENCY_CODE_CHANGED = 'rate/currency_code_changed';
export const RATES_RECEIVED = 'rate/rates_received';

export function rateReducer(state = initialState, action) {
  switch (action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload };
    case RATES_RECEIVED:
      return { ...state, currencyData: action.payload };
    default:
      return state;
  }
}

// Selector
export const getAmount = (state) => state.rate.amount;
export const getCurrencyCode = (state) => state.rate.currencyCode;
export const getCurrencyData = (state) => state.rate.currencyData;

// Action Creator
export const amountChanged = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount
});

// 使用 redux-thunk
export function changeCurrenyCode(currencyCode) {
  return function changeCurrenyDataThunk(dispatch) {
    // 首先修改当前 currency code
    dispatch({
      type: CURRENCY_CODE_CHANGED,
      payload: currencyCode
    });
    // 异步修改当前 currency data
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      dispatch({
        type: RATES_RECEIVED,
        payload: rates
      });
    });
  };
}

// 异步初始化 rate 初始状态 （在 react render 前执行）
export function getInitalRates(dispatch, getState) {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(changeCurrenyCode(currencyCode));
}
