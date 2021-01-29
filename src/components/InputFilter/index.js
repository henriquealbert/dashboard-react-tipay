import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export default function InputFilter() {
  return (
    <InputGroup mr="1.375rem" mb={{ base: '1.75rem', md: '0' }}>
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
  );
}
