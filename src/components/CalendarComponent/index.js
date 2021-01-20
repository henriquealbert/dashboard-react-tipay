import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from '@emotion/styled';

export default function CalendarComponent({ data }) {
  const events = data.map((event) => {
    if (event.groupId === 'Vendas') {
      event.backgroundColor = '#3B424C';
      event.borderColor = '#3B424C';
      return event;
    }
    if (event.groupId === 'Recebíveis') {
      event.backgroundColor = '#FDCB6E';
      event.borderColor = '#FDCB6E';
      return event;
    }
  });

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
        events={events}
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
  .fc-toolbar-title {
    font-size: 26px;
    line-height: 32px;
    font-family: 'Montserrat';
    font-weight: normal;
    text-transform: capitalize;
    color: #606060;
  }
  .fc-button-primary {
    background-color: transparent;
    border: 2px solid #9b9b9b;
    border-radius: 5px;
    color: #9b9b9b;
    text-transform: capitalize;
    font-weight: 600;
    height: 49px;
  }
  .fc-today-button {
    width: 137px;
    height: 49px;
    font-size: 20px;
  }
  .fc .fc-button-primary:hover {
    background-color: #9b9b9b;
    border-color: #9b9b9b;
  }

  .fc .fc-button-primary:disabled {
    background-color: transparent;
    border-color: #c7c7c7;
    color: #c7c7c7;
  }

  .fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
    margin-right: 12px;
    border-radius: 5px;
  }
  .fc-direction-ltr .fc-button-group > .fc-button:not(:first-of-type) {
    border-radius: 5px;
  }

  .fc .fc-daygrid-day-number {
    padding: 22px 22px 8px;
    text-transform: uppercase;
    color: #b8b8b8;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Montserrat';
    font-weight: 600;
  }
  .fc-h-event .fc-event-main {
    text-align: center;
    border-radius: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
    font-family: 'Montserrat';
    font-size: 14px;
  }

  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 32px;
  }
`;
