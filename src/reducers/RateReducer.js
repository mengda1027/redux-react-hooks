const initialState = {
  amount: '12.99',
  currencyCode: 'EUR'
};

export function rateReducer(state = initialState, action) {
  switch (action.type) {
    case 'rate/amountChanged':
      return { ...state, amount: action.payload };
    case 'rate/currencyCodeUpdated':
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

// Selector
export const getAmount = (state) => state.rate.amount;
export const getCurrencyCode = (state) => state.rate.currencyCode;
