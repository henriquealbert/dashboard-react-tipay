import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

export default function InfoBoleto() {
  return (
    <Box>
      <Text
        color="gray.500"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        fontWeight="bold"
      >
        Informações boleto
      </Text>
      <Box
        mt="12px"
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        borderRadius="0.625rem"
        w="100%"
        bg="white"
        p={{ base: '2rem', xlg: '3.625rem 4.25rem' }}
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box w={{ md: '50%' }} mr={{ md: '2rem', xlg: '56px' }}>
            <FormControl id="price" mb="1.75rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Valor a ser cobrado
              </FormLabel>
              <Input
                type="price"
                variant="innerSolid"
                placeholder="Digite o valor"
              />
            </FormControl>

            <FormControl id="date" mb={{ base: '1.75rem', md: '0' }}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Data de vencimento
              </FormLabel>
              <Input
                type="date"
                variant="innerSolid"
                placeholder="Digite a data de vencimento"
              />
            </FormControl>
          </Box>

          <Box w={{ md: '50%' }} ml={{ xlg: '56px' }}>
            <FormControl id="description" mb="1.75rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Instruções do boleto
              </FormLabel>
              <Input variant="innerSolid" placeholder="Digite as instruções" />
            </FormControl>

            <FormControl id="limit_date">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Data limite de pagamento
              </FormLabel>
              <Input
                variant="innerSolid"
                placeholder="Digite a data limite de pagamento"
              />
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
