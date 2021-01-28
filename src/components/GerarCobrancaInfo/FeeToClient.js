import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Switch
} from '@chakra-ui/react';
import { useState } from 'react';

export default function FeeToClient() {
  const [hasFee, setFee] = useState(false);

  return (
    <Box>
      <FormControl display="flex" alignItems="center" my="1.375rem">
        <FormLabel
          htmlFor="juros_de_mora"
          mb="0"
          color="gray.500"
          fontWeight="bold"
          fontSize="1.25rem"
        >
          Repassar taxa para o cliente?
        </FormLabel>
        <Switch
          id="juros_de_mora"
          value={hasFee}
          onChange={() => setFee(!hasFee)}
        />
      </FormControl>

      {hasFee ? (
        <Box
          boxShadow="0rem 0.188rem 0.625rem #0000000A"
          borderRadius="0.625rem"
          w="100%"
          bg="white"
          p={{ base: '2rem', xlg: '3rem 4.25rem' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Text fontSize="1.25rem" lineHeight="2.5rem">
            Valor a ser cobrado:
            <Text as="span" ml="1rem" color="black" fontWeight="bold">
              R$ 50,00
            </Text>
          </Text>
          <Text fontSize="1.25rem" lineHeight="2.5rem">
            Valor a receber:
            <Text as="span" ml="1rem" color="black" fontWeight="bold">
              R$ 47,00
            </Text>
          </Text>
        </Box>
      ) : (
        <Flex
          bg="white"
          boxShadow="0rem 0.188rem 0.625rem #0000000A"
          h="5.625rem"
          borderRadius="0.625rem"
          justifyContent="center"
          alignItems="center"
          px="4.25rem"
        >
          <Box h="2px" bg="#F2F2F2" w="100%" />
        </Flex>
      )}
    </Box>
  );
}
