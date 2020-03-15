import React from "react";
import { IonContent, IonPage, IonGrid, IonRow, IonIcon, IonText } from "@ionic/react";
import { sadOutline } from "ionicons/icons";
import useForceUpdate from "use-force-update";

import { AddPhotos, PhotosList } from "../components";
import { getPhotos } from "../data/photos";
import { groupByDate } from "../data/utils";

export const Photos: React.FC = () => {
  const forceUpdate = useForceUpdate();
  let photos = getPhotos();

  const refreshList = () => {
    photos = getPhotos();
    forceUpdate();
  };

  const renderPhotos = () => {
    if (!photos || photos.length === 0)
      return (
        <IonGrid className="ion-margin-vertical ion-text-center ion-text-large">
          <IonRow className="ion-justify-content-center">
            <IonIcon
              icon={sadOutline}
              size="large"
              className="ion-margin-vertical"
              color="medium"
            ></IonIcon>
            <IonText color="medium" style={{ fontSize: "1.2rem", fontWeight: 500 }}>
              No photos yet, start by adding uploading your photos using the Add button above
            </IonText>
          </IonRow>
        </IonGrid>
      );
    return <PhotosList photos={groupByDate(photos)} />;
  };

  return (
    <IonPage>
      <IonContent class="ion-padding">
        <AddPhotos refreshList={refreshList} />
        {renderPhotos()}
      </IonContent>
    </IonPage>
  );
};
