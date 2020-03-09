import React, { FC, SyntheticEvent, useRef } from "react";
import { IonInput, IonItem, IonGrid, IonRow, IonButton, IonLabel, IonIcon } from "@ionic/react";
import { rocketOutline } from "ionicons/icons";
import { addMeasurement } from "../data/measurements";

export const AddMeasurements: FC = () => {
  const parts = {
    chestRef: { name: "chest", ref: useRef<number>(0) },
    waistRef: { name: "waist", ref: useRef<number>(0) },
    stomachRef: { name: "stomach", ref: useRef<number>(0) },
    buttocksRef: { name: "buttocks", ref: useRef<number>(0) },
    legRef: { name: "leg", ref: useRef<number>(0) },
    armRef: { name: "arm", ref: useRef<number>(0) }
  };

  const getPartsValues = () => {
    return {
      date: new Date().toISOString(),
      parts: Object.entries(parts).map(single => ({
        name: single[1].name,
        value: single[1].ref.current
      }))
    };
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // TODO: check if measurement is already added then add
    addMeasurement(getPartsValues());
  };

  const renderParts = () => {
    return Object.entries(parts).map(single => {
      const name = single[1].name.charAt(0).toUpperCase() + single[1].name.slice(1);
      const ref = single[1].ref;
      return (
        <IonItem key={name}>
          <IonInput
            type="number"
            placeholder={name}
            onIonChange={e => (ref.current = Number(e.detail.value))}
          />
        </IonItem>
      );
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {renderParts()}
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
