import React, { FC } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonGrid,
  IonRow,
  IonText
} from "@ionic/react";

import { measurmentEntryType } from "../data/measurements/types";
import { convertISODate } from "../data/utils";

interface Props {
  measurements: measurmentEntryType[];
}

export const MeasurementsList: FC<Props> = ({ measurements }) => {
  return (
    <>
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
          </IonCard>
        );
      })}
    </>
  );
};
