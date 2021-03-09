import { useQuery } from 'react-query';
import api from 'api';

export default function useStatisticsHome(start, end) {
  return useQuery(
    ['Statistics_Home'],
    () =>
      api
        .get(`v1/statistics_home/start=${start}/end=${end}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
