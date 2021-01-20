import { BoletoIcon } from 'styles/icons';

export const isBoleto = (payment) => {
  if (payment === 'Boleto') {
    return (
      <>
        Boleto
        <BoletoIcon ml="1rem" w="1.563rem" h="1.125rem" color="gray.800" />
      </>
    );
  } else {
    return payment;
  }
};
