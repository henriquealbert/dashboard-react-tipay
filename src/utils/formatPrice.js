import Dinero from 'dinero.js';

Dinero.globalLocale = 'pt-BR';

export const formatPrice = (value) => {
  if (value > 0) {
    const formatedPrice = Dinero({ amount: value, currency: 'BRL' }).toFormat(
      '$0,0.00'
    );
    return formatedPrice;
  } else if (value === 0) {
    return 'R$ 0,00';
  } else {
    return;
  }
};
