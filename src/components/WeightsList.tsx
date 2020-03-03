import React, { FC } from "react";
import { weightEntryType } from "../data/weight/types";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel
} from "@ionic/react";
import { convertISODate } from "../data/weight/utils";

interface Props {
  weights: weightEntryType[];
}

export const WeightsList: FC<Props> = ({ weights }) => {
  return (
    <>
      {weights.map(weight => (
        <IonCard key={weight.id}>
          <IonCardHeader>
            <IonCardSubtitle>{convertISODate(weight.date)} </IonCardSubtitle>
            <IonCardTitle>
              {weight.weightVal}
              <IonChip color="primary">
                <IonLabel color="dark">KG</IonLabel>
              </IonChip>
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
      ))}
    </>
  );
};
