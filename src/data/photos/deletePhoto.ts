import { db } from "../initialize";
import { PhotoEntry } from "./types";

export const deletePhoto = (photo: PhotoEntry) => {
  const photos = db.get("photos");
  // @ts-ignore
  photos.remove(photo).write();
};
