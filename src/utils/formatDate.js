import { parseISO, format, subMonths, subDays } from 'date-fns';

export const formatDateTime = (date) => {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, "dd/MM/yyyy' - 'HH:mm:ss");
  return formattedDate;
};

export const formatDate = (date) => {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'dd/MM/yyyy');
  return formattedDate;
};

export const getToday = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy/MM/dd');
  return formattedDate;
};

export const getYesterday = () => {
  const currentDate = new Date();
  const yesterday = subDays(currentDate, 1);
  const formattedDate = format(yesterday, 'yyyy/MM/dd');
  return formattedDate;
};

export const getLast7Day = () => {
  const currentDate = new Date();
  const last7Day = subDays(currentDate, 7);
  const formattedDate = format(last7Day, 'yyyy/MM/dd');
  return formattedDate;
};

export const getLast15Day = () => {
  const currentDate = new Date();
  const last15Day = subDays(currentDate, 15);
  const formattedDate = format(last15Day, 'yyyy/MM/dd');
  return formattedDate;
};

export const getLast30Day = () => {
  const currentDate = new Date();
  const last30Day = subDays(currentDate, 30);
  const formattedDate = format(last30Day, 'yyyy/MM/dd');
  return formattedDate;
};

export const getLast3Months = () => {
  const currentDate = new Date();
  const last3Months = subMonths(currentDate, 3);
  const formattedDate = format(last3Months, 'yyyy/MM');
  return formattedDate;
};
