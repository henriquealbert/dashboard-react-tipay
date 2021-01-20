import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from '@emotion/styled';

export default function CalendarComponent() {
  const handleDateClick = (args) => {
    console.log(args);
  };

  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        eventClick={() => console.log('oi')}
        dateClick={handleDateClick}
        locale="pt-br"
        buttonText={{
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          list: 'Lista'
        }}
        events={[
          { title: 'event 1', date: '2021-01-01' },
          { title: 'event 2', date: '2021-01-02' }
        ]}
        height="100%"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 830px;
  margin-top: 38px;
  margin-bottom: 52px;
  flex-grow: 1;

  .fc-view-harness {
    background: white;
    box-shadow: 0px 3px 10px #0000000a;
    border-radius: 10px;
  }
  .fc-scrollgrid-liquid {
    border-radius: 10px;
    border: none;
  }
  .fc-scrollgrid-section-header {
    td {
      border-radius: 10px 10px 0 0;
      border-right: none;
    }
  }
  .fc-col-header-cell {
    padding: 20px 48px;
    color: #b8b8b8;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Montserrat';
  }
  .fc-scrollgrid-section-body {
    td {
      border-radius: 0 0 10px 10px;
      border-bottom: none;
      border-right: none;
    }
  }
`;
