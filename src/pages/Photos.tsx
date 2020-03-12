import React from "react";
import { IonContent, IonPage } from "@ionic/react";

import { AddPhotos } from "../components";

export const Photos: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding">
        <AddPhotos />
      </IonContent>
    </IonPage>
  );
};
