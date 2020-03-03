import { db } from "../initialize";
import { sortWeightsByDate } from "./utils";

export const getWeights = () => {
  return sortWeightsByDate(db.get("weights").value());
};
