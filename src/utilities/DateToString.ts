const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dateToString = (date: Date) => {
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

export default dateToString;
