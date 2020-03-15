import { db } from "../initialize";

export const deleteAllPhotos = () =>
  db
    .get("photos")
    // @ts-ignore
    .remove()
    .write();
