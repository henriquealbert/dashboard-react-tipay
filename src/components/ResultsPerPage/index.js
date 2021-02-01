import { Select } from '@chakra-ui/react';
import { useQueryClient } from 'react-query';

export default function ResultsPerPage({ setPer_Page, per_Page }) {
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    queryClient.removeQueries(['transactions']);
    setPer_Page(Number(e.target.value));
  };

  return (
    <Select
      maxW={{ xlg: '310px' }}
      variant="solid"
      size="lg"
      h="3.75rem"
      borderRadius="0.313rem"
      _placeholder={{ color: 'gray.1000' }}
      fontSize="1.125rem"
      ml={{ base: '0', md: '2rem' }}
      mt={{ base: '1rem', md: '0' }}
      value={per_Page}
      onChange={handleChange}
    >
      <option value="25">Resultado por pag: 25</option>
      <option value="50">Resultado por pag: 50</option>
      <option value="75">Resultado por pag: 75</option>
      <option value="100">Resultado por pag: 100</option>
    </Select>
  );
}
