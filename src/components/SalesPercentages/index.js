import { Box } from '@chakra-ui/react';
import PercentageItem from './PercentageItem';

export default function SalesPercentages() {
  const debito = '31%';
  const credito = '60%';
  const boleto = '9%';

  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridColumnGap={{ base: '1rem', xxl: '1.3rem' }}
      maxH={{ base: '179px', xxl: '211px' }}
    >
      <PercentageItem value={debito} label="Débito" color="brand.yellow" />
      <PercentageItem value={credito} label="Crédito" color="brand.waterBlue" />
      <PercentageItem value={boleto} label="Boleto" color="brand.darkBlue" />
    </Box>
  );
}
