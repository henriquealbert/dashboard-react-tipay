import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  RadioGroup,
  Radio
} from '@chakra-ui/react';
import { BoletoIcon } from 'styles/icons';

export default function GerarBoletoInfo() {
  return (
    <Box mt="36px" w="100%">
      <Text
        color="gray.500"
        fontSize="20px"
        lineHeight="24px"
        fontWeight="bold"
      >
        Informações boleto
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
          <Box w="50%" mr="56px">
            <FormControl id="price" mb="28px">
              <FormLabel
                color="gray.1000"
                fontSize="20px"
                lineHeight="24px"
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

            <FormControl id="date" mb="28px">
              <FormLabel
                color="gray.1000"
                fontSize="20px"
                lineHeight="24px"
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
            <FormControl id="description">
              <FormLabel
                color="gray.1000"
                fontSize="20px"
                lineHeight="24px"
                fontWeight="semibold"
              >
                Instruções do boleto
              </FormLabel>
              <Textarea
                variant="filled"
                placeholder="Digite as instruções"
                h="155px"
              />
            </FormControl>
          </Box>
        </Flex>

        <Flex>
          <FormControl id="juros" w="50%" mr="56px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Deseja incluir juros de mora?
            </FormLabel>
            <RadioGroup>
              <Radio value="true" size="lg" mr="52px" cursor="pointer">
                Sim
              </Radio>
              <Radio value="false" size="lg" cursor="pointer">
                Não
              </Radio>
            </RadioGroup>
          </FormControl>

          <FormControl id="user" w="50%" ml="56px">
            <FormLabel
              color="gray.1000"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Cadastrar novo usuário
            </FormLabel>
            <RadioGroup>
              <Radio value="true" size="lg" mr="52px" cursor="pointer">
                Sim
              </Radio>
              <Radio value="false" size="lg" cursor="pointer">
                Não
              </Radio>
            </RadioGroup>
          </FormControl>
        </Flex>
      </Box>

      <Button
        variant="green"
        w="100%"
        h="90px"
        fontSize="30px"
        mt="48px"
        mb="56px"
      >
        Gerar Boleto <BoletoIcon ml="16px" w="45px" h="32px" />
      </Button>
    </Box>
  );
}
