import { useQuery } from 'react-query';
import api from 'api';

export function useTransaction(transactionID) {
  return useQuery(['transactions', transactionID], () =>
    transactionID
      ? api
          .get(`/v1/transaction/${transactionID}/details.json`)
          .then((res) => res.data)
      : ''
  );
}
