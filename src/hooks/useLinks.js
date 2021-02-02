import { useQuery } from 'react-query';
import api from 'api';

export default function useLinks(params, page) {
  return useQuery(
    ['transfers', page],
    () =>
      api
        .get(`v1/links${params ? params : ''}${page ? page : '/1'}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
