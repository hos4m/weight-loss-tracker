import React, { FC } from "react";

import { PhotoEntry } from "../data/photos/types";
import { FadingWrapper } from "./FadingWrapper";

interface Props {
  photo: PhotoEntry;
  hide: () => void;
}

export const PhotoBlock: FC<Props> = ({ photo, hide }) => {
  return (
    <FadingWrapper>
      <img
        src={photo.base64}
        alt={`Taken at ${photo.date}`}
        style={{ width: "100%", borderRadius: "15px" }}
        onClick={hide}
      />
    </FadingWrapper>
  );
};
