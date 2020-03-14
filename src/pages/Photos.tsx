import React from "react";
import { IonContent, IonPage } from "@ionic/react";

import { AddPhotos, PhotosList } from "../components";
import { getPhotos } from "../data/photos";

export const Photos: React.FC = () => {
  const photos = getPhotos();

  return (
    <IonPage>
      <IonContent class="ion-padding">
        <AddPhotos />
        {photos.length > 0 && <PhotosList photos={photos} />}
      </IonContent>
    </IonPage>
  );
};
