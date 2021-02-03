import { useQuery } from 'react-query';
import api from 'api';

export function useTransfers(params, page) {
  return useQuery(
    ['transfers', page],
    () =>
      api
        .get(`v1/transfers${params ? params : ''}${page ? page : '/1'}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}

export function useTransfers_TABLE(params, page) {
  return useQuery(
    ['transfers', page],
    () =>
      api
        .get(`v1/transfers${params ? params : ''}${page ? page : '/1'}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
