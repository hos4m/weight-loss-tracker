import { db } from "../initialize";
import { weightEntryType } from "./types";
import { isEntryAddedBefore } from "../utils";

export const addWeight = (entry: weightEntryType) => {
  const weights = db.get("weights");
  if (!isEntryAddedBefore(weights.value(), entry)) {
    weights
      // @ts-ignore
      .push(entry)
      .write();
    return true;
  } else {
    return false;
  }
};
