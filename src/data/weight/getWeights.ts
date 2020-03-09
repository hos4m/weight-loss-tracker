import { db } from "../initialize";
import { sortListByDate } from "../utils";

export const getWeights = () => {
  return sortListByDate(db.get("weights").value());
};
