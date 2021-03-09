import { useQuery } from 'react-query';
import api from 'api';

export default function useBuyers(page) {
  return useQuery(
    ['Buyers', page],
    () => api.get(`v1/buyers/${page}.json`).then((res) => res.data),
    { keepPreviousData: true }
  );
}
