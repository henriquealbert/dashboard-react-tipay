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
        p="58px 4.25rem"
      >
        <Flex>
          <Box w="50%" mr="56px">
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

            <FormControl id="date" mb="1.75rem">
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

          <Box w="50%" ml="56px">
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
