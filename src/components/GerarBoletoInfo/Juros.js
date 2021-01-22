import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

export default function Juros() {
  return (
    <Box mt="36px" w="100%">
      <Text
        color="gray.500"
        fontSize="1.25rem"
        lineHeight="24px"
        fontWeight="bold"
      >
        Juros de mora
      </Text>
      <Box
        mt="12px"
        boxShadow="0rem 0.188rem 10px #0000000A"
        borderRadius="10px"
        w="100%"
        bg="white"
        p="58px 4.25rem"
      >
        <Flex>
          <FormControl id="mora" mb="1.75rem" mr="112px">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Juros de mora (a.m)
            </FormLabel>
            <Input
              type="text"
              variant="innerSolid"
              placeholder="Juros de mora"
            />
          </FormControl>

          <FormControl id="multa" mb="1.75rem">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Multa de mora
            </FormLabel>
            <Input
              type="text"
              variant="innerSolid"
              placeholder="Multa de mora"
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl id="limit_date">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Data limite de pagamento
            </FormLabel>
            <Input
              type="date"
              variant="innerSolid"
              placeholder="Digite a data de limite do pagamento"
            />
          </FormControl>
        </Flex>
      </Box>
    </Box>
  );
}