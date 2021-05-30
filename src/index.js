import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ExchangeRate } from './components/ExchangeRate';
import { getInitalRates } from './reducers/RateReducer';
import { store } from './store';
import './style.css';

store.dispatch(getInitalRates);

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById('root')
);
