import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonText,
  IonIcon,
  IonGrid,
  IonRow
} from "@ionic/react";
import { sadOutline } from "ionicons/icons";

import { AddWeightEntry, FadingWrapper } from "../components";
import { getWeights } from "../data/weight";

export const Weight: React.FC = () => {
  const [isAddWeightEntryVisible, setIsAddWeightEntryVisible] = useState(false);
  const weights = getWeights();

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

  const renderWeightEntries = () => {
    if (!weights || weights.length === 0)
      return (
        <IonGrid className="ion-margin-vertical ion-text-center ion-text-large">
          <IonRow className="ion-justify-content-center">
            <IonIcon
              icon={sadOutline}
              size="large"
              className="ion-margin-vertical"
              color="medium"
            ></IonIcon>
            <IonText
              color="medium"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              No weights yet, start by adding a new entry using the Add button
              above
            </IonText>
          </IonRow>
        </IonGrid>
      );
    return <IonText>Weight entries should go here</IonText>;
  };

  return (
    <IonPage>
      <IonContent class="ion-padding">
        <IonButton expand="block" fill="outline" onClick={addOnClick}>
          Add
        </IonButton>
        {renderAddWeightEntry()}
        {renderWeightEntries()}
      </IonContent>
    </IonPage>
  );
};
