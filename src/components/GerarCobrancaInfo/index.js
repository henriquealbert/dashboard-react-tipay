import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';

import ModalGenerateSale from './ModalGenerateSale';

export default function GerarCobrancaInfo() {
  const [parcelas, setParcelas] = useState(5);
  const [linkDuration, setLinkDuration] = useState(5);
  const [hasFee, setFee] = useState('0');

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
          <FormControl mb="28px" mr="112px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="semibold"
              mb="0"
            >
              Parcelas
            </FormLabel>
            <Text
              textAlign="center"
              mb="16px  "
              fontSize="20px"
              color="gray.800"
              fontWeight="semibold"
            >
              {parcelas === 0 ? 'À vista' : `${parcelas}X`}
            </Text>
            <Slider
              max={12}
              value={parcelas}
              onChange={setParcelas}
              colorScheme="teal"
            >
              <SliderTrack bg="#DFDFDF" boxSize="8px">
                <SliderFilledTrack bg="teal.200" />
              </SliderTrack>
              <SliderThumb
                boxSize="28px"
                bg="linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)"
              />
            </Slider>
          </FormControl>
          <FormControl mb="28px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="semibold"
              mb="0"
            >
              Duração do link
            </FormLabel>
            <Text
              textAlign="center"
              mb="16px  "
              fontSize="20px"
              color="gray.800"
              fontWeight="semibold"
            >
              {linkDuration === 1
                ? `${linkDuration} Dia`
                : `${linkDuration} Dias`}
            </Text>
            <Slider
              max={30}
              min={1}
              value={linkDuration}
              onChange={setLinkDuration}
              colorScheme="teal"
            >
              <SliderTrack bg="#DFDFDF" boxSize="8px">
                <SliderFilledTrack bg="teal.200" />
              </SliderTrack>
              <SliderThumb
                boxSize="28px"
                bg="linear-gradient(180deg, #60C4B9 0%, #4EE2DE 100%)"
              />
            </Slider>
          </FormControl>
        </Flex>

        <Flex>
          <FormControl>
            <FormLabel
              color="gray.1000"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="semibold"
              mb="16px"
            >
              Repassar taxa para o cliente?
            </FormLabel>
            <RadioGroup onChange={setFee} value={hasFee}>
              <Radio value="1" size="lg" mr="52px" cursor="pointer">
                Sim
              </Radio>
              <Radio value="0" size="lg" cursor="pointer">
                Não
              </Radio>
            </RadioGroup>
          </FormControl>
        </Flex>
      </Box>
      <ModalGenerateSale />
    </Box>
  );
}
