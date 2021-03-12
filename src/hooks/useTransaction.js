import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export function useTransaction(transactionID) {
  return useQuery(
    ['Transaction', transactionID],
    () => fetcher(`v1/transaction/${transactionID}/details.json`),
    { keepPreviousData: true, enabled: !!transactionID }
  );
}
