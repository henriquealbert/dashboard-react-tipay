import { parseISO, format } from 'date-fns';

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
