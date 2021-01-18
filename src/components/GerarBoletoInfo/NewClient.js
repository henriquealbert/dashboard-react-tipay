import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex
} from '@chakra-ui/react';

export default function NewClient() {
  return (
    <Box mt="36px" w="100%">
      <Text
        color="gray.500"
        fontSize="20px"
        lineHeight="24px"
        fontWeight="bold"
      >
        Informações do cliente
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
          <Box w="50%" mr="112px">
            <FormControl id="name" mb="28px">
              <FormLabel
                color="gray.1000"
                fontSize="20px"
                lineHeight="24px"
                fontWeight="semibold"
              >
                Nome completo
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                placeholder="Digite o nome do cliente"
              />
            </FormControl>

            <FormControl id="doc" mb="28px">
              <FormLabel
                color="gray.1000"
                fontSize="20px"
                lineHeight="24px"
                fontWeight="semibold"
              >
                CPF ou CNPJ
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                placeholder="Digite o numero do documento"
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel
                color="gray.1000"
                fontSize="20px"
                lineHeight="24px"
                fontWeight="semibold"
              >
                Email
              </FormLabel>
              <Input
                type="email"
                variant="innerSolid"
                placeholder="Digite o email"
              />
            </FormControl>
          </Box>
          <Box w="50%">
            <Flex>
              <FormControl id="street" mb="28px" mr="22px">
                <FormLabel
                  color="gray.1000"
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="semibold"
                >
                  Endereço
                </FormLabel>
                <Input
                  type="text"
                  variant="innerSolid"
                  placeholder="Nome da Rua"
                />
              </FormControl>

              <FormControl id="streetNumber" mb="28px" maxW="135px">
                <FormLabel
                  color="gray.1000"
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="semibold"
                >
                  Número
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Nº" />
              </FormControl>
            </Flex>

            <Flex>
              <FormControl id="neighborhood" mb="28px" mr="22px" maxW="50%">
                <FormLabel
                  color="gray.1000"
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="semibold"
                >
                  Bairro
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Bairro" />
              </FormControl>
              <FormControl id="city" mb="28px" maxW="50%">
                <FormLabel
                  color="gray.1000"
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="semibold"
                >
                  Cidade
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Cidade" />
              </FormControl>
            </Flex>

            <Flex>
              <FormControl id="state" mr="22px" maxW="50%">
                <FormLabel
                  color="gray.1000"
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="semibold"
                >
                  Estado
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Estado" />
              </FormControl>
              <FormControl id="complement" maxW="50%">
                <FormLabel
                  color="gray.1000"
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="semibold"
                >
                  Complemento
                </FormLabel>
                <Input
                  type="text"
                  variant="innerSolid"
                  placeholder="Complemento"
                />
              </FormControl>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
