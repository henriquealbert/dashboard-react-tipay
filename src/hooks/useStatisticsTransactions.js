import { useQuery } from 'react-query';
import api from 'api';

export default function useStatisticsTransactions(start, end) {
  return useQuery(
    ['Statistics_Transactions'],
    () =>
      api
        .get(
          `v1/store/statistics_transactions/start_date=${start}/end_date=${end}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
