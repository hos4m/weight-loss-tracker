import React, { FC, Fragment, useState } from "react";
import { IonChip, IonIcon, IonLabel, IonRow, IonGrid, IonText } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";

import { PhotoEntriesGroupedByDateType, PhotoEntry } from "../data/photos/types";
import { LineSeparator } from "./LineSeparator";
import { PhotoBlock } from "./PhotoBlock";

interface Props {
  photos: PhotoEntriesGroupedByDateType;
}

export const PhotosList: FC<Props> = ({ photos }) => {
  const [showPhotoModal, setShowPhotoModal] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);

  const renderLabel = () => {
    if (showPhotoModal) {
      return (
        <IonText color="medium">
          <p className="ion-text-center" color="priamry">
            Click again to go back
          </p>
        </IonText>
      );
    }

    return (
      <IonText color="medium">
        <p className="ion-text-center" color="priamry">
          Click on a photo to enlarge
        </p>
      </IonText>
    );
  };

  const photoOnClick = (photo: PhotoEntry) => {
    setSelectedPhoto(photo);
    setShowPhotoModal(true);
  };

  const hidePhotoModal = () => {
    setSelectedPhoto(null);
    setShowPhotoModal(false);
  };

  const renderPhotos = () => {
    if (showPhotoModal && selectedPhoto) {
      return <PhotoBlock photo={selectedPhoto} hide={hidePhotoModal} />;
    }

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
                    style={{ width: "calc(92%/2)", borderRadius: "15px", margin: "4% 4% 0 0" }}
                    onClick={() => photoOnClick(photo)}
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

  return (
    <>
      {renderLabel()}
      {renderPhotos()}
    </>
  );
};
