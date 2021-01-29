import { Box, Flex, FormLabel, Button } from '@chakra-ui/react';
import InputFilter from 'components/InputFilter';

export default function InfoClient({ setNewClient }) {
  return (
    <Box
      mt="0.75rem"
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
      w="100%"
      bg="white"
      p={{ base: '2rem', xlg: '3rem 4.25rem' }}
    >
      <FormLabel
        color="gray.1000"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        fontWeight="semibold"
      >
        Buscar cliente
      </FormLabel>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <InputFilter />

        <Button
          variant="outline"
          h="4.563rem"
          fontSize="1.125rem"
          onClick={() => setNewClient(true)}
        >
          Cadastrar novo usuário
        </Button>
      </Flex>
    </Box>
  );
}
