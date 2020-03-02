import { db } from "../initialize";
import { weightEntryType } from "./types";
import { isWeightAlreadyAdded } from "./utils";

export const addWeight = (entry: weightEntryType) => {
  const weights = db.get("weights");
  if (!isWeightAlreadyAdded(weights.value(), entry)) {
    weights
      // @ts-ignore
      .push(entry)
      .write();
    return true;
  } else {
    return false;
  }
};
