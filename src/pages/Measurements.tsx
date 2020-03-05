import { IonContent, IonPage, IonButton } from "@ionic/react";
import React, { useState } from "react";

import { AddMeasurements, FadingWrapper } from "../components";

export const Measurements: React.FC = () => {
  const [addSectionVisible, setAddSectionVisible] = useState<boolean>(true); // TODO: should be false by default

  // TODO: on unmount, reset the state values

  const renderAddSection = () => {
    return (
      addSectionVisible && (
        <FadingWrapper>
          <AddMeasurements />
        </FadingWrapper>
      )
    );
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
      </IonContent>
    </IonPage>
  );
};
