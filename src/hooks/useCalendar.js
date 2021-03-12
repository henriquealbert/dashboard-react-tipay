import { useQuery } from 'react-query';
import { fetcher } from 'api/fetcher';

export function useCalendar_Sold(start, end) {
  return useQuery(
    ['Calendar_Sold'],
    () => fetcher(`v1/calendar/sold/start=${start}/end=${end}.json`),
    { keepPreviousData: true }
  );
}

export function useCalendar_ScheduledToReceive(start, end) {
  return useQuery(
    ['Calendar_ScheduledToReceive'],
    () =>
      fetcher(
        `v1/calendar/scheduled_to_receive/start=${start}/end=${end}.json`
      ),
    { keepPreviousData: true }
  );
}

export function useCalendar_ExtractDay(day) {
  return useQuery(
    ['Calendar_ExtractDay'],
    () => fetcher(`v1/calendar/extract/day=${day}.json`),
    { keepPreviousData: true }
  );
}
