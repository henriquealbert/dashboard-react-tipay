import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useBuyers(page) {
  return useQuery(['Buyers', page], () => fetcher(`v1/buyers/${page}.json`), {
    keepPreviousData: true
  });
}
