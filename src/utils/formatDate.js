import { format, subMonths, subDays, addMonths } from 'date-fns';

function parseUTC(date) {
  const d = new Date(date);
  return new Date(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
}

export const formatDateTime = (date) => {
  if (date) {
    const parsedDate = parseUTC(date);
    const formattedDate = format(parsedDate, "dd/MM/yyyy' - 'HH:mm:ss");
    return formattedDate;
  } else {
    return;
  }
};

export const formatDate = (date) => {
  if (date) {
    const parsedDate = parseUTC(date);
    const formattedDate = format(parsedDate, 'dd/MM/yyyy');
    return formattedDate;
  } else {
    return;
  }
};

export const getToday = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd');
  return formattedDate;
};

export const getYesterday = () => {
  const currentDate = new Date();
  const yesterday = subDays(currentDate, 1);
  const formattedDate = format(yesterday, 'yyyy-MM-dd');
  return formattedDate;
};

export const getLast7Day = () => {
  const currentDate = new Date();
  const last7Day = subDays(currentDate, 7);
  const formattedDate = format(last7Day, 'yyyy-MM-dd');
  return formattedDate;
};

export const getLast15Day = () => {
  const currentDate = new Date();
  const last15Day = subDays(currentDate, 15);
  const formattedDate = format(last15Day, 'yyyy-MM-dd');
  return formattedDate;
};

export const getLast30Day = () => {
  const currentDate = new Date();
  const last30Day = subDays(currentDate, 30);
  const formattedDate = format(last30Day, 'yyyy-MM-dd');
  return formattedDate;
};

export const getLast3Months = () => {
  const currentDate = new Date();
  const last3Months = subMonths(currentDate, 3);
  const formattedDate = format(last3Months, 'yyyy-MM-dd');
  return formattedDate;
};

export const normalizeDate = (date) => {
  if (date) {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return formattedDate;
  } else {
    return;
  }
};

export const normalizeDateUTC = (date) => {
  if (date) {
    const parsedDate = parseUTC(date);
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');
    return formattedDate;
  } else {
    return;
  }
};

export const getFirstDayMonth = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const FirstDay = new Date(year, month, 1);
  return normalizeDateUTC(FirstDay);
};

export const getLastDayMonth = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const FirstDay = new Date(year, month, 1);
  const nextFirst = addMonths(FirstDay, 1);
  return normalizeDateUTC(nextFirst);
};

export const formatDatepicker = (date) => {
  if (date) {
    const formattedDate = date.split('/').reverse().join('-');
    return formattedDate;
  } else {
    return;
  }
};
