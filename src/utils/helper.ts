const pricePerUnitWithCurrency = (price: number, currency: string) => {
  return `${price.toFixed(2)}${currency}`;
};

export default pricePerUnitWithCurrency;
