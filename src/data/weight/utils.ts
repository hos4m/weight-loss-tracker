import { weightEntryType } from "./types";

export const sortWeightsByDate = (weights: weightEntryType[]) => {
  return weights.slice().sort((a: weightEntryType, b: weightEntryType) => {
    if (new Date(a.date) > new Date(b.date)) return -1;
    if (new Date(a.date) < new Date(b.date)) return 1;
    return 0;
  });
};
