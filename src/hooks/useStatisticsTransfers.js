import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useStatisticsTransfers(start, end) {
  return useQuery(
    ['Statistics_Transfers'],
    () =>
      fetcher(
        `v1/store/statistics_transfers/start_date=${start}/end_date=${end}.json`
      ),
    { keepPreviousData: true }
  );
}
