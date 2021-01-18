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
        fontSize="20px"
        lineHeight="24px"
        fontWeight="bold"
      >
        Juros de mora
      </Text>
      <Box
        mt="12px"
        boxShadow="0px 3px 10px #0000000A"
        borderRadius="10px"
        w="100%"
        bg="white"
        p="58px 68px"
      >
        <Flex>
          <FormControl id="mora" mb="28px" mr="112px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
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

          <FormControl id="multa" mb="28px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
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
              fontSize="20px"
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
