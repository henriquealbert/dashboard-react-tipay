import { BoletoIcon } from 'styles/icons';

export const formatPaymentType = (payment) => {
  if (payment === 3) {
    return (
      <>
        Boleto
        <BoletoIcon ml="1rem" w="1.563rem" h="1.125rem" color="gray.800" />
      </>
    );
  }
  if (payment === 2) {
    return 'Crédito';
  }
  if (payment === 1) {
    return 'Débito';
  }
};
