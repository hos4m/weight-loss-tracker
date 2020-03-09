import { db } from "../initialize";
import { measurmentEntryType } from "./types";
import { isEntryAddedBefore } from "../utils";

export const addMeasurement = (entry: measurmentEntryType) => {
  const measurements = db.get("measurements");
  if (!isEntryAddedBefore(measurements.value(), entry)) {
    measurements
      // @ts-ignore
      .push(entry)
      .write();
    return true;
  } else {
    return false;
  }
};
