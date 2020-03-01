import React, { FC } from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonDatetime,
  IonChip,
  IonIcon,
  IonRow,
  IonGrid
} from "@ionic/react";
import { speedometerOutline } from "ionicons/icons";

export const AddWeightEntry: FC = () => {
  return (
    <>
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonChip color="primary" outline className="ion-float-right">
            <IonIcon icon={speedometerOutline} color="primary" />
            <IonLabel>KG</IonLabel>
          </IonChip>
        </IonRow>
      </IonGrid>

      <IonItem>
        <IonLabel position="stacked">
          <IonText>Enter Weight</IonText>
        </IonLabel>
        <IonInput autofocus required inputMode="decimal" type="number" />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">
          <IonText>Date</IonText>
        </IonLabel>
        <IonDatetime
          displayFormat="DD MMMM YYYY"
          placeholder="Select Date"
        ></IonDatetime>
      </IonItem>
    </>
  );
};
