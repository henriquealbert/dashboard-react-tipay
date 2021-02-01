import { useQuery } from 'react-query';
import api from 'api';

export default function useTransactions(params, page) {
  return useQuery(
    ['transactions', page],
    () =>
      api
        .get(`v1/transactions${params ? params : ''}${page ? page : '/1'}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
