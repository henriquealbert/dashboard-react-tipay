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
    <Box mt="2.25rem" w="100%">
      <Text
        color="gray.500"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        fontWeight="bold"
      >
        Informações do cliente
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
          <Box w="50%" mr="112px">
            <FormControl id="name" mb="1.75rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
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

            <FormControl id="doc" mb="1.75rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
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
                fontSize="1.25rem"
                lineHeight="1.5rem"
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
              <FormControl id="street" mb="1.75rem" mr="1.375rem">
                <FormLabel
                  color="gray.1000"
                  fontSize="1.25rem"
                  lineHeight="1.5rem"
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

              <FormControl id="streetNumber" mb="1.75rem" maxW="12.188rem">
                <FormLabel
                  color="gray.1000"
                  fontSize="1.25rem"
                  lineHeight="1.5rem"
                  fontWeight="semibold"
                >
                  Número
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Nº" />
              </FormControl>
            </Flex>

            <Flex>
              <FormControl
                id="neighborhood"
                mb="1.75rem"
                mr="1.375rem"
                maxW="50%"
              >
                <FormLabel
                  color="gray.1000"
                  fontSize="1.25rem"
                  lineHeight="1.5rem"
                  fontWeight="semibold"
                >
                  Bairro
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Bairro" />
              </FormControl>
              <FormControl id="city" mb="1.75rem" maxW="50%">
                <FormLabel
                  color="gray.1000"
                  fontSize="1.25rem"
                  lineHeight="1.5rem"
                  fontWeight="semibold"
                >
                  Cidade
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Cidade" />
              </FormControl>
            </Flex>

            <Flex>
              <FormControl id="state" mr="1.375rem" maxW="50%">
                <FormLabel
                  color="gray.1000"
                  fontSize="1.25rem"
                  lineHeight="1.5rem"
                  fontWeight="semibold"
                >
                  Estado
                </FormLabel>
                <Input type="text" variant="innerSolid" placeholder="Estado" />
              </FormControl>
              <FormControl id="complement" maxW="50%">
                <FormLabel
                  color="gray.1000"
                  fontSize="1.25rem"
                  lineHeight="1.5rem"
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
