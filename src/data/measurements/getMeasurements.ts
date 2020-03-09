import { db } from "../initialize";

export const getMeasurements = () => {
  return db.get("measurements").value();
};
