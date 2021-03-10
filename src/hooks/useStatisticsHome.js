import { useQuery } from 'react-query';
import api from 'api';

export default function useStatisticsHome(start, end) {
  return useQuery(
    ['Statistics_Home'],
    () =>
      api
        .get(
          `v1/store/statistics_home/start_date=${start}/end_date=${end}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
