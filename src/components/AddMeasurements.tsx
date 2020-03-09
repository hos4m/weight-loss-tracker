import React, { FC, SyntheticEvent, useRef, useState } from "react";
import {
  IonInput,
  IonItem,
  IonGrid,
  IonRow,
  IonButton,
  IonLabel,
  IonIcon,
  IonAlert,
  IonDatetime
} from "@ionic/react";
import { rocketOutline } from "ionicons/icons";

import { addMeasurement } from "../data/measurements";

interface Props {
  refreshList: () => void;
  hide: () => void;
}

export const AddMeasurements: FC<Props> = ({ refreshList, hide }) => {
  const [isErrorAlertVisible, setIsErrorAlertVisible] = useState(false);

  let dateRef = useRef(new Date().toISOString());

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
      date: dateRef.current,
      parts: Object.entries(parts).map(single => ({
        name: single[1].name,
        value: single[1].ref.current
      }))
    };
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const result = addMeasurement(getPartsValues());
    if (result) {
      hide();
      refreshList();
    }
    if (!result) setIsErrorAlertVisible(true);
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

  const renderDatePicker = () => {
    return (
      <IonItem>
        <IonDatetime
          displayFormat="DD MMMM YYYY"
          placeholder="Select Date"
          value={dateRef.current}
          onIonChange={e => (dateRef.current = String(e.detail.value))}
        ></IonDatetime>
      </IonItem>
    );
  };

  const renderAlert = () => {
    if (!isErrorAlertVisible) return false;
    return (
      <IonAlert
        isOpen
        onDidDismiss={() => setIsErrorAlertVisible(false)}
        header="Error!"
        message={
          "You have already added your measurements for that date, if you want to modify it please remove it from the list below first and then add it again."
        }
        buttons={["OK"]}
      />
    );
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {renderParts()}
        {renderDatePicker()}
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonButton type="submit">
              <IonLabel style={{ marginRight: "1rem" }}>Add it</IonLabel>
              <IonIcon icon={rocketOutline} />
            </IonButton>
          </IonRow>
        </IonGrid>
      </form>

      {renderAlert()}
    </>
  );
};
