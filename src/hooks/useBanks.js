import { useQuery } from 'react-query';
import api from 'api';

export default function useBanks() {
  return useQuery(
    ['Banks'],
    () => api.get(`v1/banks.json`).then((res) => res.data),
    { keepPreviousData: true }
  );
}
