import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text
} from '@chakra-ui/react';

export default function GerarCobrancaInfo() {
  return (
    <Box mt="36px" w="100%">
      <Text
        color="gray.500"
        fontSize="20px"
        lineHeight="24px"
        fontWeight="bold"
      >
        Informações cobrança
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
          <FormControl mb="28px" mr="112px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Valor a ser cobrado
            </FormLabel>
            <Input variant="innerSolid" placeholder="Digite o valor" />
          </FormControl>
          <FormControl mb="28px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Data de vencimento
            </FormLabel>
            <Input
              variant="innerSolid"
              placeholder="Digite a data de vencimento"
            />
          </FormControl>
        </Flex>
        <Flex>
          <Slider defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Box>
    </Box>
  );
}
