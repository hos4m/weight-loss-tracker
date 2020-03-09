import { db } from "../initialize";
import { measurmentEntryType } from "./types";

export const addMeasurement = (entry: measurmentEntryType) => {
  const measurements = db.get("measurements");
  measurements
    // @ts-ignore
    .push(entry)
    .write();
};
