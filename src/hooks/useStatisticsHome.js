import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useStatisticsHome(start, end) {
  return useQuery(
    ['Statistics_Home'],
    () =>
      fetcher(
        `v1/store/statistics_home/start_date=${start}/end_date=${end}.json`
      ),
    {
      keepPreviousData: true
    }
  );
}
