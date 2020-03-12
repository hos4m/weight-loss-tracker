import React, { FC, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonGrid,
  IonRow,
  IonText,
  IonButton,
  IonIcon,
  IonAlert
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";

import { measurmentEntryType } from "../data/measurements/types";
import { convertISODate } from "../data/utils";
import { deleteMeasurement } from "../data/measurements";

interface Props {
  measurements: measurmentEntryType[];
  refreshList: () => void;
}

export const MeasurementsList: FC<Props> = ({ measurements, refreshList }) => {
  const [selectedMeasurement, setSelectedMeasurement] = useState<measurmentEntryType | undefined>(
    undefined
  );
  const [confirmationAlertVisible, setConfirmationAlertVisible] = useState(false);

  const deleteOnClick = (measurement: measurmentEntryType) => {
    setSelectedMeasurement(measurement);
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
    selectedMeasurement?.date && deleteMeasurement(selectedMeasurement);
    refreshList();
  };

  return (
    <>
      {renderConfirmationAlert()}

      <IonText color="medium">
        <p className="ion-text-center" color="priamry">
          All measurements are in CM
        </p>
      </IonText>

      {measurements.map(single => {
        return (
          <IonCard key={single.date}>
            <IonCardHeader>
              <IonCardSubtitle>{convertISODate(single.date)} </IonCardSubtitle>
              <IonCardContent style={{ paddingRight: 0, paddingLeft: 0, paddingBottom: 0 }}>
                <IonGrid style={{ padding: 0 }}>
                  <IonRow className="ion-wrap">
                    {single.parts.map(part => (
                      <div key={part.name} className="ion-text-capitalize">
                        <IonChip>
                          {part.name}: {part.value}
                        </IonChip>
                      </div>
                    ))}
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCardHeader>

            <IonButton
              fill="clear"
              className="ion-float-right"
              onClick={() => deleteOnClick(single)}
            >
              <IonIcon icon={trashOutline} />
            </IonButton>
          </IonCard>
        );
      })}
    </>
  );
};
