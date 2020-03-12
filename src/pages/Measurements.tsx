import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonIcon, IonText } from "@ionic/react";
import useForceUpdate from "use-force-update";

import { AddMeasurements, FadingWrapper, MeasurementsList } from "../components";
import { getMeasurements } from "../data/measurements/";
import { sadOutline } from "ionicons/icons";

export const Measurements: React.FC = () => {
  const [addSectionVisible, setAddSectionVisible] = useState<boolean>(false);
  let measurements = getMeasurements();
  const forceUpdate = useForceUpdate();

  const refreshList = () => {
    measurements = getMeasurements();
    forceUpdate();
  };

  const renderAddSection = () => {
    return (
      addSectionVisible && (
        <FadingWrapper>
          <AddMeasurements refreshList={refreshList} hide={() => setAddSectionVisible(false)} />
        </FadingWrapper>
      )
    );
  };

  const renderList = () => {
    if (!measurements || measurements.length === 0) {
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
              No measurements yet, start by adding a new entry using the Add button above
            </IonText>
          </IonRow>
        </IonGrid>
      );
    } else {
      return <MeasurementsList measurements={measurements} refreshList={refreshList} />;
    }
  };

  return (
    <IonPage>
      <IonContent class="ion-padding">
        <IonButton
          expand="block"
          fill="outline"
          onClick={() => setAddSectionVisible(!addSectionVisible)}
        >
          Add
        </IonButton>
        {renderAddSection()}
        {renderList()}
      </IonContent>
    </IonPage>
  );
};
