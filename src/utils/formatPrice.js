import Dinero from 'dinero.js';

Dinero.globalLocale = 'pt-BR';

export const formatPrice = (value) => {
  const formatedPrice = Dinero({ amount: value, currency: 'BRL' }).toFormat(
    '$0,0.00'
  );
  return formatedPrice;
};
