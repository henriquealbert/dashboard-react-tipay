import { useQuery } from 'react-query';
import api from 'api';

const fetchDetails = async (transactionID) => {
  if (transactionID) {
    return await api
      .get(`/v1/transaction/${transactionID}/details.json`)
      .then((res) => res.data);
  }
};

export function useTransaction(transactionID) {
  return useQuery(
    ['transaction', transactionID],
    () => fetchDetails(transactionID),
    { keepPreviousData: true, enabled: !!transactionID }
  );
}
