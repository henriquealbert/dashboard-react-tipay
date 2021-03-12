import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useStatisticsLinks(start, end) {
  return useQuery(
    ['Statistics_Links'],
    () =>
      fetcher(
        `v1/store/statistics_links/start_date=${start}/end_date=${end}.json`
      ),
    { keepPreviousData: true }
  );
}
