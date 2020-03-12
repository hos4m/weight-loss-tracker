import { db } from "../initialize";
import { measurmentEntryType } from "./types";

export const deleteMeasurement = (measurement: measurmentEntryType) => {
  const measurements = db.get("measurements");
  // @ts-ignore
  measurements.remove(measurement).write();
};
