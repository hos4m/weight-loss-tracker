import React, { FC, Fragment } from "react";
import { IonChip, IonIcon, IonLabel, IonRow, IonGrid } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";

import { PhotoEntriesGroupedByDateType } from "../data/photos/types";
import { LineSeparator } from "./LineSeparator";

interface Props {
  photos: PhotoEntriesGroupedByDateType;
}

export const PhotosList: FC<Props> = ({ photos }) => {
  const renderPhotos = () => {
    return Object.keys(photos).map(date => {
      return (
        <Fragment key={date}>
          <IonRow>
            <IonChip color="primary">
              <IonIcon icon={calendarOutline} />
              <IonLabel>{date}</IonLabel>
            </IonChip>
          </IonRow>

          <IonGrid>
            <IonRow>
              {photos[date].map(photo => (
                <Fragment key={photo.date}>
                  <img
                    src={photo.base64}
                    alt={`Taken at ${photo.date}`}
                    style={{ width: "calc(94%/3)", borderRadius: "15px", margin: "2% 2% 0 0" }}
                  />
                </Fragment>
              ))}
            </IonRow>
          </IonGrid>

          <LineSeparator />
        </Fragment>
      );
    });
  };

  return <>{renderPhotos()}</>;
};
