import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import GerarBoletoModal from './GerarBoletoModal';
import InfoBoleto from './InfoBoleto';
import InfoClient from './InfoClient';
import JurosMora from './JurosMora';
import NewClient from './NewClient';

export default function GerarBoletoInfo() {
  const [hasNewClient, setNewClient] = useState(false);

  return (
    <Box mt="2.25rem" w="100%">
      <InfoBoleto />

      <JurosMora />

      {hasNewClient ? (
        <NewClient setNewClient={setNewClient} />
      ) : (
        <InfoClient setNewClient={setNewClient} />
      )}

      <GerarBoletoModal />
    </Box>
  );
}
