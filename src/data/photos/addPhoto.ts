import { db } from "../initialize";
import { PhotoEntry } from "./types";

export const addPhoto = (entry: PhotoEntry) => {
  const photos = db.get("photos");
  photos
    // @ts-ignore
    .push(entry)
    .write();
};
