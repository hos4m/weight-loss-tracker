export const convertISODate = (ISODate: string) => {
  const date = new Date(ISODate);
  return `
  ${date.getDate()}
  ${date.toLocaleString("default", { month: "long" })}
  ${date.getFullYear()}`;
};

export const isEntryAddedBefore = (list: any, entry: any) => {
  const dates = list.map((single: any) => convertISODate(single.date));
  return dates.includes(convertISODate(entry.date));
};
