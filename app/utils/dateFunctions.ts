const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const differentYearMonth = (d1: Date, d2: Date): boolean =>
  d1.getMonth() !== d2.getMonth() || d1.getFullYear() !== d2.getFullYear();

const dateToMonthName = (d: Date): string => MONTHS[d.getMonth()];

export { differentYearMonth, dateToMonthName };
