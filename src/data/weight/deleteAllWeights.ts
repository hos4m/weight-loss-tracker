import { db } from "../initialize";

export const deleteAllWeights = () =>
  db
    .get("weights")
    // @ts-ignore
    .remove()
    .write();
