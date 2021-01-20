import { Select } from '@chakra-ui/react';

export default function ResultsPerPage({ ml }) {
  return (
    <Select
      maxW="310px"
      variant="solid"
      size="lg"
      h="60px"
      borderRadius="5px"
      _placeholder={{ color: 'gray.1000' }}
      fontSize="1.125rem"
      ml={ml}
    >
      <option value="25">Resultado por pag: 25</option>
      <option value="50">Resultado por pag: 50</option>
      <option value="75">Resultado por pag: 75</option>
      <option value="100">Resultado por pag: 100</option>
    </Select>
  );
}
