import { useQuery } from 'react-query';
import api from 'api';

export function useLinks(params, page) {
  return useQuery(
    ['transfers', page],
    () =>
      api
        .get(`v1/links${params ? params : ''}${page ? page : '/1'}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}

export function useLinks_TABLE(params, page) {
  return useQuery(
    ['transfers', page],
    () =>
      api
        .get(`v1/links${params ? params : ''}${page ? page : '/1'}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}