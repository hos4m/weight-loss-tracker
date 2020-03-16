import { db } from "../initialize";
import { PhotoEntry } from "./types";
import { convertISODate } from "../utils";

export const deleteDayPhotos = (date: string) => {
  const photos = db.get("photos");
  const photosToDelete = photos
    .value()
    .filter((photo: PhotoEntry) => convertISODate(photo.date) === date);

  photosToDelete.forEach((photo: PhotoEntry) => {
    // @ts-ignore
    photos.remove(photo).write();
  });
};
