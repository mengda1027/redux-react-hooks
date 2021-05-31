import { useSelector } from 'react-redux';
import { getCurrencyCode, getCurrencyData } from '../reducers/RateReducer';

export function RateTable({ amount }) {
  const currencyData = useSelector(getCurrencyData);
  const currencyCode = useSelector(getCurrencyCode);

  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(currencyData)
          .filter((i) => i[0] !== currencyCode) // 过滤当前 picker 中的code
          .map(([code, rate]) => {
            // NOTE: normally avoid floating point math in JS
            const exchangeAmount = amount * rate || 0.0;
            return (
              <tr key={code}>
                <td>{code}</td>
                <td>
                  {exchangeAmount.toLocaleString('en', {
                    style: 'currency',
                    currency: code
                  })}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
