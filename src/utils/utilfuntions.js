export const getMonthNames = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "Jun",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const Months = [
  { value: 0, text: "January" },
  { value: 1, text: "February" },
  { value: 2, text: "March" },
  { value: 3, text: "April" },
  { value: 4, text: "May" },
  { value: 5, text: "June" },
  { value: 6, text: "July" },
  { value: 7, text: "August" },
  { value: 8, text: "September" },
  { value: 9, text: "October" },
  { value: 10, text: "November" },
  { value: 11, text: "December" },
];

export const getYearsList = () => {
  const _currentYear = new Date().getFullYear();

  const years = [];

  for (let i = 0; i <= 10; i++) {
    const year = _currentYear + i;
    years.push({ value: year, text: year.toString() });
  }

  return years;
};
