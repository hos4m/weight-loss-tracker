import React, { useState } from "react";
import { IonContent, IonPage, IonButton } from "@ionic/react";

import { AddWeightEntry, FadingWrapper } from "../components";

export const Weight: React.FC = () => {
  const [isAddWeightEntryVisible, setIsAddWeightEntryVisible] = useState(false);

  const addOnClick = () => {
    setIsAddWeightEntryVisible(!isAddWeightEntryVisible);
  };

  const renderAddWeightEntry = () => {
    if (!isAddWeightEntryVisible) return null;
    return (
      <FadingWrapper>
        <AddWeightEntry />
      </FadingWrapper>
    );
  };

  return (
    <IonPage>
      <IonContent class="ion-padding">
        <IonButton expand="block" fill="outline" onClick={addOnClick}>
          Add
        </IonButton>
        {renderAddWeightEntry()}
      </IonContent>
    </IonPage>
  );
};
