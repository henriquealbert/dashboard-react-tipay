import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useQueryClient } from 'react-query';
import { useRef, useState, useEffect } from 'react';

import { normalizeDateUTC } from 'utils/formatDate';

export default function CalendarComponent({
  data,
  setEventDate,
  setCurrentStart,
  setCurrentEnd
}) {
  const queryClient = useQueryClient();
  // Calendar API
  const calendarRef = useRef();
  const [calendarApi, setCalendarApi] = useState();

  useEffect(() => {
    if (calendarRef?.current) {
      const api = calendarRef.current.getApi();
      setCalendarApi(api);
    }
  }, []);

  // events color
  const events = data?.map((event) => {
    if (event?.group_id === 'transactions') {
      event.backgroundColor = '#3B424C';
      event.borderColor = '#3B424C';
      return event;
    }
    if (event?.group_id === 'receivables') {
      event.backgroundColor = '#FDCB6E';
      event.borderColor = '#FDCB6E';
      return event;
    }
  });

  const handleDateClick = (args) => {
    queryClient.removeQueries(['calendar_ExtractDay']);
    setEventDate(args?.dateStr);
  };

  const handleEventClick = (args) => {
    queryClient.removeQueries(['calendar_ExtractDay']);
    setEventDate(args?.event.startStr);
  };

  const handleChangeDates = () => {
    queryClient.removeQueries(['calendar_Sold']);
    queryClient.removeQueries(['calendar_ScheduledToReceive']);
    setCurrentStart(normalizeDateUTC(calendarApi?.view.currentStart));
    setCurrentEnd(normalizeDateUTC(calendarApi?.view.currentEnd));
  };

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      eventClick={handleEventClick}
      events={events}
      defaultAllDay
      locale="pt-br"
      buttonText={{
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Lista'
      }}
      height="100%"
      headerToolbar={{
        start: 'title',
        center: '',
        end: 'today,prev,next'
      }}
      customButtons={{
        next: {
          click: () => {
            calendarApi.next();
            handleChangeDates();
          }
        },
        prev: {
          click: () => {
            calendarApi.prev();
            handleChangeDates();
          }
        },
        today: {
          text: 'Hoje',
          click: () => {
            calendarApi.today();
            handleChangeDates();
          }
        }
      }}
    />
  );
}
