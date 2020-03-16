import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonText, IonIcon, IonRow } from "@ionic/react";
import { sadOutline } from "ionicons/icons";
import useForceUpdate from "use-force-update";

import { AddWeightEntry, FadingWrapper, WeightsList } from "../components";
import { getWeights, deleteAllWeights } from "../data/weight";
import { useDeleteAll } from "../hooks";

export const Weight: React.FC = () => {
  const [isAddWeightEntryVisible, setIsAddWeightEntryVisible] = useState(false);
  const { DeleteAllButton, DeleteAllConfirmationAlert } = useDeleteAll(deleteAllWeights);

  let weights = getWeights();
  const forceUpdate = useForceUpdate();

  const refreshList = () => {
    weights = getWeights();
    forceUpdate();
  };

  const addOnClick = () => {
    setIsAddWeightEntryVisible(!isAddWeightEntryVisible);
  };

  const renderAddWeightEntry = () => {
    if (!isAddWeightEntryVisible) return null;
    return (
      <FadingWrapper>
        <AddWeightEntry hide={() => setIsAddWeightEntryVisible(false)} refreshList={refreshList} />
      </FadingWrapper>
    );
  };

  const renderWeightEntries = () => {
    if (!weights || weights.length === 0) {
      return (
        <IonRow className="ion-justify-content-center ion-text-center ion-text-large">
          <IonIcon
            icon={sadOutline}
            size="large"
            className="ion-margin-vertical"
            color="medium"
          ></IonIcon>
          <IonText color="medium" style={{ fontSize: "1.2rem", fontWeight: 500 }}>
            No weights yet, start by adding a new entry using the Add button above
          </IonText>
        </IonRow>
      );
    }
    return <WeightsList weights={weights} refreshList={refreshList} />;
  };

  return (
    <IonPage>
      <IonContent class="ion-padding">
        <DeleteAllConfirmationAlert />

        <IonRow className="ion-justify-content-between">
          <IonButton fill="outline" onClick={addOnClick}>
            Add
          </IonButton>

          {weights.length > 0 && <DeleteAllButton />}
        </IonRow>

        {renderAddWeightEntry()}

        {renderWeightEntries()}
      </IonContent>
    </IonPage>
  );
};
