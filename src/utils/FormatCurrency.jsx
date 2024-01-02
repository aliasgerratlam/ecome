export const CurrencyFormatter = ({ amount, currency = 'USD' }) => {
  const formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);

  return formattedCurrency;
};
