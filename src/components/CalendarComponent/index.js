import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Wrapper } from './styles';

export default function CalendarComponent({ data, setEventDate }) {
  const events = data?.map((event) => {
    if (event.groupId === 'sales') {
      event.backgroundColor = '#3B424C';
      event.borderColor = '#3B424C';
      return event;
    }
    if (event.groupId === 'receivables') {
      event.backgroundColor = '#FDCB6E';
      event.borderColor = '#FDCB6E';
      return event;
    }
  });

  const handleDateClick = (args) => {
    setEventDate(args?.dateStr);
  };

  const handleEventClick = (args) => {
    setEventDate(args?.event.startStr);
  };

  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        defaultAllDay
        locale="pt-br"
        buttonText={{
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          list: 'Lista'
        }}
        events={events}
        height="100%"
      />
    </Wrapper>
  );
}
