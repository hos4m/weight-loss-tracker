import { db } from "../initialize";

export const removeAllMeasurements = () =>
  db
    .get("measurements")
    // @ts-ignore
    .remove()
    .write();
