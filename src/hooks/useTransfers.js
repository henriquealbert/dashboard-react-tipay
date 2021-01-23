import { useQuery } from 'react-query';
import api from 'api';

export default function useTransfers(params, page) {
  return useQuery('transfers', () =>
    api
      .get(`v1/transfers${params ? params : ''}${page ? page : '/1'}.json`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@tipay:token')}`
        }
      })
      .then((res) => res.data)
  );
}
