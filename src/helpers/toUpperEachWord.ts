export const toUpperEachWord = (str: string) => {
  str = str.toLowerCase();
  const capitalizedStr = str.replace(/\b\w/g, match => match.toUpperCase());
  return capitalizedStr;
};
