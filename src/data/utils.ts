export const convertISODate = (ISODate: string) => {
  const date = new Date(ISODate);
  return `
  ${date.getDate()}
  ${date.toLocaleString("default", { month: "long" })}
  ${date.getFullYear()}`;
};
