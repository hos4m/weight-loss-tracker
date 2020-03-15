import React, { FC, Fragment } from "react";
import { IonChip, IonIcon, IonLabel, IonRow, IonGrid, IonText } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";

import { PhotoEntriesGroupedByDateType } from "../data/photos/types";
import { LineSeparator } from "./LineSeparator";

interface Props {
  photos: PhotoEntriesGroupedByDateType;
}

export const PhotosList: FC<Props> = ({ photos }) => {
  const renderLabel = () => (
    <IonText color="medium">
      <p className="ion-text-center" color="priamry">
        Click on a photo to enlarge
      </p>
    </IonText>
  );

  const renderPhotos = () =>
    Object.keys(photos).map(date => {
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
                    style={{ width: "calc(92%/2)", borderRadius: "15px", margin: "4% 4% 0 0" }}
                  />
                </Fragment>
              ))}
            </IonRow>
          </IonGrid>

          <LineSeparator />
        </Fragment>
      );
    });

  return (
    <>
      {renderLabel()}
      {renderPhotos()}
    </>
  );
};
