import { db } from "../initialize";
import { sortListByDate } from "../utils";

export const getMeasurements = () => {
  return sortListByDate(db.get("measurements").value());
};
