import date from 'date-and-time';

export const getTomorrowsDate = () => {
  return new Date(Date.now() + (1000 * 60 * 60 * 24));
};

export const formatDate = (dateObj, format) => {
  return date.format(dateObj, format);
};
