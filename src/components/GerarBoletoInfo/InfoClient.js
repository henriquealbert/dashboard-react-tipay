import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react';

export default function InfoClient({ setNewClient }) {
  return (
    <Box my="1.375rem">
      <Text
        color="gray.500"
        fontSize="1.25rem"
        lineHeight="1.5rem"
        fontWeight="bold"
        mb="1.375rem"
      >
        Informações do cliente
      </Text>
      <Box
        boxShadow="0rem 0.188rem 0.625rem #0000000A"
        borderRadius="0.625rem"
        w="100%"
        bg="white"
        p="3rem 4.25rem"
      >
        <FormLabel
          color="gray.1000"
          fontSize="1.25rem"
          lineHeight="1.5rem"
          fontWeight="semibold"
        >
          Buscar cliente
        </FormLabel>
        <Flex>
          <InputGroup mr="1.375rem">
            <Input
              type="text"
              variant="innerSolid"
              placeholder="Digite o CPF, CNPJ ou nome do cliente"
              w="100%"
              maxW="none"
            />
            <InputRightElement
              as="button"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
              px="1.875rem"
            >
              <SearchIcon w="1.438rem" h="1.438rem" color="#AFAFAF" />
            </InputRightElement>
          </InputGroup>

          <Button
            variant="outline"
            h="4.563rem"
            fontSize="1.125rem"
            onClick={() => setNewClient(true)}
          >
            Cadastrar novo usuário
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
