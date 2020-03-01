import { db } from "../initialize";

export const getWeights = () => {
  return db.get("weights").value();
};
