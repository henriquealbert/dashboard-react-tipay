import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export default function useStatisticsBoletos(start, end) {
  return useQuery(
    ['Statistics_Boletos'],
    () =>
      fetcher(
        `v1/store/statistics_boletos/start_date=${start}/end_date=${end}.json`
      ),
    { keepPreviousData: true }
  );
}
