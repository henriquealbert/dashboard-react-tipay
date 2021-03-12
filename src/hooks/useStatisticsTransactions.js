import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useStatisticsTransactions(start, end) {
  return useQuery(
    ['Statistics_Transactions'],
    () =>
      fetcher(
        `v1/store/statistics_transactions/start_date=${start}/end_date=${end}.json`
      ),
    { keepPreviousData: true }
  );
}
