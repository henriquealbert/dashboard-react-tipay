import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useBanks() {
  return useQuery(['Banks'], () => fetcher(`v1/banks.json`), {
    keepPreviousData: true
  });
}
