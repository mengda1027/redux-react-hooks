import { useDispatch, useSelector } from 'react-redux';
import {
  changeCurrenyCode,
  getCurrencyCode,
  getSupportedCurrencies
} from '../reducers/RateReducer';

export function CurrencyCodePicker() {
  const dispatch = useDispatch();
  const currencyCode = useSelector(getCurrencyCode);
  const supportedCurrencies = useSelector(getSupportedCurrencies);
  function onChange(e) {
    dispatch(changeCurrenyCode(e.target.value));
  }
  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
