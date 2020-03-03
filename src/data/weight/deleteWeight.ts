import { db } from "../initialize";
import { weightEntryType } from "./types";

export const deleteWeight = (weight: weightEntryType) => {
  const weights = db.get("weights");
  // @ts-ignore
  weights.remove(weight).write();
};
