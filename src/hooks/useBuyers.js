import { useQuery } from 'react-query';
import api from 'api';

export default function useBuyers(page) {
  return useQuery(
    ['buyers', page],
    () => api.get(`v1/store/buyers/${page}.json`).then((res) => res.data),
    { keepPreviousData: true, retry: 2 }
  );
}
