import React, { FC, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel,
  IonIcon,
  IonButton,
  IonAlert
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";

import { deleteWeight } from "../data/weight";
import { weightEntryType } from "../data/weight/types";
import { convertISODate } from "../data/weight/utils";

interface Props {
  weights: weightEntryType[];
  refreshList: () => void;
}

export const WeightsList: FC<Props> = ({ weights, refreshList }) => {
  const [selectedWeight, setSelectedWeight] = useState<weightEntryType | undefined>(undefined);
  const [confirmationAlertVisible, setConfirmationAlertVisible] = useState(false);

  const deleteOnClick = (weight: weightEntryType) => {
    setSelectedWeight(weight);
    setConfirmationAlertVisible(true);
  };

  const renderConfirmationAlert = () => {
    return (
      <IonAlert
        isOpen={confirmationAlertVisible}
        header="Are you sure?"
        message="This will be deleted permanently"
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => setConfirmationAlertVisible(false)
          },
          {
            text: "Yes",
            handler: () => deleteOnConfirm()
          }
        ]}
      />
    );
  };

  const deleteOnConfirm = () => {
    selectedWeight?.id && deleteWeight(selectedWeight);
    refreshList();
  };

  return (
    <>
      {renderConfirmationAlert()}
      {weights.map(weight => (
        <IonCard key={weight.id}>
          <IonCardHeader>
            <IonCardSubtitle>{convertISODate(weight.date)} </IonCardSubtitle>
            <IonCardTitle>
              {weight.weightVal}
              <IonChip color="primary">
                <IonLabel color="dark">KG</IonLabel>
              </IonChip>

              <IonButton
                fill="clear"
                className="ion-float-right"
                onClick={() => deleteOnClick(weight)}
              >
                <IonIcon icon={trashOutline} />
              </IonButton>
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
      ))}
    </>
  );
};
