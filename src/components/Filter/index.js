import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export default function Filter() {
  return (
    <InputGroup h="60px" maxW="310px" size="lg" borderRadius="5px">
      <Input
        variant="solid"
        _placeholder={{ color: 'gray.1000', fontSize: '1.125rem' }}
        fontSize="1.125rem"
        placeholder="Filtrar..."
      />
      <InputRightElement as="button" cursor="pointer">
        <SearchIcon color="gray.1000" w="1.25rem" h="1.25rem" />
      </InputRightElement>
    </InputGroup>
  );
}
