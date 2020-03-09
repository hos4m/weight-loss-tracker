import { weightEntryType } from "./types";
import { convertISODate } from "../utils";

export const isWeightAlreadyAdded = (
  weightList: weightEntryType[],
  weightEntry: weightEntryType
) => {
  const dates = weightList.map(w => convertISODate(w.date));
  return dates.includes(convertISODate(weightEntry.date));
};

export const sortWeightsByDate = (weights: weightEntryType[]) => {
  return weights.slice().sort((a: weightEntryType, b: weightEntryType) => {
    if (new Date(a.date) > new Date(b.date)) return -1;
    if (new Date(a.date) < new Date(b.date)) return 1;
    return 0;
  });
};
