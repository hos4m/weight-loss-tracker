import { db } from "../initialize";

export const deleteAllMeasurements = () =>
  db
    .get("measurements")
    // @ts-ignore
    .remove()
    .write();
