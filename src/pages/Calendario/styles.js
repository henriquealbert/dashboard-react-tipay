import styled from '@emotion/styled';

export const CalendarWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin-bottom: 3.25rem;

  .fc-view-harness {
    background: white;
    box-shadow: 0rem 0.188rem 0.625rem #0000000a;
    border-radius: 0.625rem;
  }
  .fc-scrollgrid-liquid {
    border-radius: 0.625rem;
    border: none;
  }
  .fc-scrollgrid-section-header {
    td {
      border-radius: 0.625rem 0.625rem 0 0;
      border-right: none;
    }
  }
  .fc-col-header-cell {
    color: #b8b8b8;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Montserrat';
  }
  .fc-scrollgrid-section-body {
    td {
      border-radius: 0 0 0.625rem 0.625rem;
      border-bottom: none;
      border-right: none;
    }
  }
  .fc-toolbar-title {
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: 'Montserrat';
    font-weight: normal;
    text-transform: capitalize;
    color: #606060;
  }
  .fc-button-primary {
    background-color: transparent;
    border: 0.125rem solid #9b9b9b;
    border-radius: 0.313rem;
    color: #9b9b9b;
    text-transform: capitalize;
    font-weight: 600;
    height: 49px;
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
    border-radius: 0.313rem;
  }
  .fc-direction-ltr .fc-button-group > .fc-button:not(:first-of-type) {
    border-radius: 0.313rem;
  }

  .fc .fc-daygrid-day-number {
    padding: 1.375rem 1.375rem 8px;
    text-transform: uppercase;
    color: #b8b8b8;
    font-size: 1rem;
    line-height: 1.188rem;
    font-family: 'Montserrat';
    font-weight: 600;
  }
  .fc-h-event .fc-event-main {
    text-align: center;
    border-radius: 0.313rem;
    padding-top: 0.188rem;
    padding-bottom: 0.188rem;
    font-family: 'Montserrat';
    font-size: 0.875rem;
  }

  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 2rem;
  }

  .fc-daygrid-day-frame {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .fc .fc-toolbar {
      display: block;
    }
    .fc-toolbar-title {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
  }
  @media (max-width: 1919px) {
    .fc-toolbar-title {
      font-size: 1.25rem;
    }
  }
`;
