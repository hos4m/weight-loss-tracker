import { weightEntryType } from "./types";

export const convertISODate = (ISODate: string) => {
  const date = new Date(ISODate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const isWeightAlreadyAdded = (
  weightList: weightEntryType[],
  weightEntry: weightEntryType
) => {
  const dates = weightList.map(w => convertISODate(w.date));
  return dates.includes(convertISODate(weightEntry.date));
};
