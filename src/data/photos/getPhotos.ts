import { db } from "../initialize";
import { sortListByDate } from "../utils";

export const getPhotos = () => {
  return sortListByDate(db.get("photos").value());
};
