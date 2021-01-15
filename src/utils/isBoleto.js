import { BoletoIcon } from 'styles/icons';

export const isBoleto = (payment) => {
  if (payment === 'Boleto') {
    return (
      <>
        Boleto
        <BoletoIcon ml="16px" w="25px" h="18px" color="gray.800" />
      </>
    );
  } else {
    return payment;
  }
};
