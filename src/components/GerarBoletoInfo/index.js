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
import { useState } from 'react';
import { BoletoIcon } from 'styles/icons';
import Juros from './Juros';
import NewClient from './NewClient';

export default function GerarBoletoInfo() {
  const [hasJuros, setJuros] = useState('0');
  const [hasNewClient, setNewClient] = useState('0');

  return (
    <Box mt="36px" w="100%">
      <Text
        color="gray.500"
        fontSize="1.25rem"
        lineHeight="24px"
        fontWeight="bold"
      >
        Informações boleto
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
          <Box w="50%" mr="56px">
            <FormControl id="price" mb="1.75rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
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

            <FormControl id="date" mb="1.75rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
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
                fontSize="1.25rem"
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
              fontSize="1.25rem"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Deseja incluir juros de mora?
            </FormLabel>
            <RadioGroup onChange={setJuros} value={hasJuros}>
              <Radio value="1" size="lg" mr="52px" cursor="pointer">
                Sim
              </Radio>
              <Radio value="0" size="lg" cursor="pointer">
                Não
              </Radio>
            </RadioGroup>
          </FormControl>

          <FormControl id="user" w="50%" ml="56px">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="24px"
              fontWeight="semibold"
            >
              Cadastrar novo usuário
            </FormLabel>
            <RadioGroup onChange={setNewClient} value={hasNewClient}>
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

      {hasJuros === '1' && <Juros />}
      {hasNewClient === '1' && <NewClient />}

      <Button
        variant="green"
        w="100%"
        h="90px"
        fontSize="30px"
        mt="48px"
        mb="56px"
      >
        Gerar Boleto <BoletoIcon ml="1rem" w="45px" h="2rem" />
      </Button>
    </Box>
  );
}
