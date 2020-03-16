import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonText, IonIcon, IonGrid, IonRow } from "@ionic/react";
import { sadOutline } from "ionicons/icons";
import useForceUpdate from "use-force-update";

import { AddWeightEntry, FadingWrapper, WeightsList } from "../components";
import { getWeights, deleteAllWeights } from "../data/weight";
import { useDeleteAll } from "../hooks";

export const Weight: React.FC = () => {
  const [isAddWeightEntryVisible, setIsAddWeightEntryVisible] = useState(false);
  const { DeleteAllButton, DeleteAllConfirmationAlert } = useDeleteAll({
    onConfirm: () => deleteAllWeights()
  });

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
        <IonGrid className="ion-margin-vertical ion-text-center ion-text-large">
          <IonRow className="ion-justify-content-center">
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
        </IonGrid>
      );
    }
    return <WeightsList weights={weights} refreshList={refreshList} />;
  };

  return (
    <IonPage>
      <IonContent class="ion-padding">
        <DeleteAllConfirmationAlert />

        <IonGrid>
          <IonRow className="ion-justify-content-between">
            <IonButton fill="outline" onClick={addOnClick}>
              Add
            </IonButton>

            {weights.length > 0 && <DeleteAllButton />}
          </IonRow>
        </IonGrid>

        {renderAddWeightEntry()}

        {renderWeightEntries()}
      </IonContent>
    </IonPage>
  );
};
