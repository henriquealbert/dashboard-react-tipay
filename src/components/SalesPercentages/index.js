import { Flex } from '@chakra-ui/react';
import PercentageItem from './PercentageItem';

export default function SalesPercentages() {
  const debito = '31%';
  const credito = '60%';
  const boleto = '9%';

  return (
    <Flex>
      <PercentageItem value={debito} label="Débito" color="brand.yellow" />
      <PercentageItem value={credito} label="Crédito" color="brand.waterBlue" />
      <PercentageItem value={boleto} label="Boleto" color="brand.darkBlue" />
    </Flex>
  );
}
