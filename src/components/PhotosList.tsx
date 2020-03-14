import React, { FC, Fragment } from "react";

import { PhotoEntry } from "../data/photos/types";

interface Props {
  photos: PhotoEntry[];
}

export const PhotosList: FC<Props> = ({ photos }) => {
  const renderPhotos = () => {
    return photos.map(photo => {
      return (
        <Fragment key={photo.date}>
          <img src={photo.base64} alt={`Taken at ${photo.date}`} />
        </Fragment>
      );
    });
  };

  return <>{renderPhotos()}</>;
};
