import { RateTable } from './RateTable';
import { useSelector } from 'react-redux';
import { CurrencyCodePicker } from './CurrencyCodePicker';
import { AmountField } from './AmountField';
import { getAmount, getCurrencyCode } from '../reducers/RateReducer';

export function ExchangeRate() {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates <CurrencyCodePicker currencyCode={currencyCode} />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable amount={amount} />
      </section>
    </>
  );
}
