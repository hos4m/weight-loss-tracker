import React, { FC, Fragment, useState } from "react";
import { IonChip, IonIcon, IonLabel, IonRow, IonText, IonAlert } from "@ionic/react";
import { calendarOutline, trashOutline } from "ionicons/icons";

import { PhotoEntriesGroupedByDateType, PhotoEntry } from "../data/photos/types";
import { LineSeparator } from "./LineSeparator";
import { PhotoBlock } from "./PhotoBlock";
import { deletePhoto, deleteDayPhotos } from "../data/photos";
import { useDeletePhotosByDay } from "../hooks";

interface Props {
  photos: PhotoEntriesGroupedByDateType;
  refreshList: () => void;
}

export const PhotosList: FC<Props> = ({ photos, refreshList }) => {
  const [showPhotoModal, setShowPhotoModal] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);
  const [confirmationAlertVisible, setConfirmationAlertVisible] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState<PhotoEntry | null>(null);
  const [dayToDelete, setDayToDelete] = useState<string | null>(null);
  const { DeleteDayConfirmationAlert, DeleteThisDayButton } = useDeletePhotosByDay(
    deleteDayOnConfirm
  );

  const renderLabel = () => (
    <IonText color="medium">
      <p className="ion-text-center" color="priamry">
        {showPhotoModal ? "Click again to go back" : "Click on a photo to enlarge"}
      </p>
    </IonText>
  );

  const photoOnClick = (photo: PhotoEntry) => {
    setSelectedPhoto(photo);
    setShowPhotoModal(true);
  };

  const hidePhotoModal = () => {
    setSelectedPhoto(null);
    setShowPhotoModal(false);
  };

  const deleteOnClick = (photo: PhotoEntry) => {
    setPhotoToDelete(photo);
    setConfirmationAlertVisible(true);
  };

  const renderConfirmationAlert = () => {
    return (
      <IonAlert
        isOpen={confirmationAlertVisible}
        header="Are you sure?"
        message="This will be deleted permanently"
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => setConfirmationAlertVisible(false)
          },
          {
            text: "Yes",
            handler: () => deleteOnConfirm()
          }
        ]}
      />
    );
  };

  const deleteOnConfirm = () => {
    photoToDelete?.date && deletePhoto(photoToDelete);
    setPhotoToDelete(null);
    setConfirmationAlertVisible(false);
    refreshList();
  };

  function deleteDayOnConfirm() {
    if (dayToDelete) deleteDayPhotos(dayToDelete);
    setConfirmationAlertVisible(false);
    setDayToDelete(null);
    refreshList();
  }

  const renderPhotos = () => {
    if (showPhotoModal && selectedPhoto) {
      return <PhotoBlock photo={selectedPhoto} hide={hidePhotoModal} />;
    }

    return Object.keys(photos).map(date => {
      return (
        <Fragment key={date}>
          <IonRow className="ion-justify-content-between">
            <IonChip color="primary" className="ion-no-margin">
              <IonIcon icon={calendarOutline} />
              <IonLabel>{date}</IonLabel>
            </IonChip>

            <DeleteThisDayButton onClick={() => setDayToDelete(date)} />
          </IonRow>

          <IonRow>
            {photos[date].map(photo => (
              <div
                key={photo.date}
                style={{ width: "calc(92%/2)", margin: "4% 4% 0 0", position: "relative" }}
              >
                <img
                  src={photo.base64}
                  alt={`Taken at ${photo.date}`}
                  style={{ borderRadius: "15px" }}
                  onClick={() => photoOnClick(photo)}
                />

                <IonIcon
                  icon={trashOutline}
                  color="light"
                  onClick={() => deleteOnClick(photo)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "red",
                    padding: "5px",
                    borderRadius: "100px"
                  }}
                />
              </div>
            ))}
          </IonRow>

          <LineSeparator />
        </Fragment>
      );
    });
  };

  return (
    <>
      {renderConfirmationAlert()}
      <DeleteDayConfirmationAlert />
      {renderLabel()}
      {renderPhotos()}
    </>
  );
};
