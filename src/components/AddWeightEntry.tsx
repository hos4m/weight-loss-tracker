import React, { FC, SyntheticEvent } from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonDatetime,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow
} from "@ionic/react";
import { rocketOutline } from "ionicons/icons";

export const AddWeightEntry: FC = () => {
  const onAdd = (e: SyntheticEvent) => {
    e.preventDefault();
    alert("test!");
  };

  return (
    <form onSubmit={onAdd}>
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
          value={new Date().toISOString()}
        ></IonDatetime>
      </IonItem>

      <IonGrid>
        <IonRow className="ion-justify-content-center ion-margin-top">
          <IonButton type="submit">
            <IonLabel style={{ marginRight: "1rem" }}>Add it</IonLabel>
            <IonIcon icon={rocketOutline} />
          </IonButton>
        </IonRow>
      </IonGrid>
    </form>
  );
};
