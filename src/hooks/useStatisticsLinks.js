import { useQuery } from 'react-query';
import api from 'api';

export default function useStatisticsLinks(start, end) {
  return useQuery(
    ['Statistics_Links'],
    () =>
      api
        .get(
          `v1/store/statistics_links/start_date=${start}/end_date=${end}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
