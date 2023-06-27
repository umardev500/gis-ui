export const toLocalTime = (unixEpoch: number) => {
  // Create a new Date object from the UTC timestamp
  const date = new Date(unixEpoch);

  // Convert to local time string
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return formattedDate;
};
