import React, { FC, Fragment } from "react";
import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";

import { PhotoEntriesGroupedByDateType } from "../data/photos/types";

interface Props {
  photos: PhotoEntriesGroupedByDateType;
}

export const PhotosList: FC<Props> = ({ photos }) => {
  const renderPhotos = () => {
    return Object.keys(photos).map(date => {
      return (
        <Fragment key={date}>
          <IonChip color="primary">
            <IonIcon icon={calendarOutline} />
            <IonLabel>{date}</IonLabel>
          </IonChip>
          {photos[date].map(photo => (
            <Fragment key={photo.date}>
              <img src={photo.base64} alt={`Taken at ${photo.date}`} />
            </Fragment>
          ))}
          <hr />
        </Fragment>
      );
    });
  };

  return <>{renderPhotos()}</>;
};
