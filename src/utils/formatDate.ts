export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  };

  const formattedDate = date
    .toLocaleDateString("ru-RU", options)
    .substring(0, 15)
    .split(",")
    .reverse()
    .join(", ");

  return formattedDate;
};
