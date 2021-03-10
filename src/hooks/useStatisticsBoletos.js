import { useQuery } from 'react-query';
import api from 'api';

export default function useStatisticsBoletos(start, end) {
  return useQuery(
    ['Statistics_Boletos'],
    () =>
      api
        .get(
          `v1/store/statistics_boletos/start_date=${start}/end_date=${end}.json`
        )
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
