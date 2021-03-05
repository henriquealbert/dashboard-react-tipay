import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

import GerarBoletoModal from './GerarBoletoModal';
import BuyerForm from 'components/BuyerForm';
import InfoBoleto from './InfoBoleto';
import InfoClient from './InfoClient';
import JurosMora from './JurosMora';

export default function GerarBoletoInfo() {
  const [hasNewClient, setNewClient] = useState(false);

  return (
    <Box mt="2.25rem" w="100%">
      <InfoBoleto />

      <JurosMora />

      <Box my="1.375rem" w="100%">
        <Text
          color="gray.500"
          fontSize="1.25rem"
          lineHeight="1.5rem"
          fontWeight="bold"
        >
          Informações do cliente
        </Text>
        {hasNewClient ? (
          <BuyerForm
            setNewClient={setNewClient}
            boxShadow="0rem 0.188rem 0.625rem #0000000A"
          />
        ) : (
          <InfoClient setNewClient={setNewClient} />
        )}
      </Box>

      <GerarBoletoModal />
    </Box>
  );
}
