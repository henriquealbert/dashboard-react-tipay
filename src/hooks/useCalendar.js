import { useQuery } from 'react-query';
import api from 'api';

export function useCalendar_Sold(start, end) {
  return useQuery(
    ['Calendar_Sold'],
    () =>
      api
        .get(`v1/calendar/sold/start=${start}/end=${end}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}

export function useCalendar_ScheduledToReceive(start, end) {
  return useQuery(
    ['Calendar_ScheduledToReceive'],
    () =>
      api
        .get(`v1/calendar/scheduled_to_receive/start=${start}/end=${end}.json`)
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}

export function useCalendar_ExtractDay(day) {
  return useQuery(
    ['Calendar_ExtractDay'],
    () =>
      api.get(`v1/calendar/extract/day=${day}.json`).then((res) => res.data),
    { keepPreviousData: true }
  );
}
