export const formatDate = (dateString: Date): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  let formattedDate: string = date.toLocaleDateString("en-US", options);
  formattedDate = formattedDate.replace(",", ""); // Remove the comma

  // Extract day, month, and year
  const [day, month, year] = formattedDate.split(" ");

  // Return the date with the day before the month
  return `${day} ${month} ${year}`;
};
