import { Select } from '@chakra-ui/react';
import { useQueryClient } from 'react-query';

export default function ResultsPerPage({ setPer_Page, per_Page, pageKey }) {
  const queryClient = useQueryClient();
  const isFetching = queryClient.isFetching();

  const handleChange = (e) => {
    queryClient.removeQueries([pageKey]);
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
      value={per_Page}
      onChange={handleChange}
      disabled={isFetching ? true : false}
      cursor={isFetching ? 'not-allowed' : 'pointer'}
    >
      <option value="25">Resultado por pag: 25</option>
      <option value="50">Resultado por pag: 50</option>
      <option value="75">Resultado por pag: 75</option>
      <option value="100">Resultado por pag: 100</option>
    </Select>
  );
}
