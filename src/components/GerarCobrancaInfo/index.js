import { Box } from '@chakra-ui/react';

import FeeToClient from './FeeToClient';
import InfoCharge from './InfoCharge';
import ModalGenerateSale from './ModalGenerateSale';

export default function GerarCobrancaInfo() {
  return (
    <Box>
      <InfoCharge />
      <FeeToClient />
      <ModalGenerateSale />
    </Box>
  );
}
