const CurrencyFormatter = ({ amount, currency }) => {
  const formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);

  return formattedCurrency;
};

export default CurrencyFormatter;
