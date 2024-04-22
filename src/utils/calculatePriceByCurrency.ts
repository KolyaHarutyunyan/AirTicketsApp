export const calculatePriceByCurrency = (
  price: number,
  toCurrency: string
): number => {
  const exchangeRates: { [key: string]: number } = {
    RUB: 1.0,
    USD: 0.011,
    EUR: 0.01,
  };

  if (exchangeRates[toCurrency]) {
    return price * exchangeRates[toCurrency];
  } else {
    console.log("Conversion not supported for the provided currency.");
    return price;
  }
};
