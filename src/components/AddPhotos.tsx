import React, { FC } from "react";
import { IonButton } from "@ionic/react";

export const AddPhotos: FC = () => {
  const addOnClick = () => {
    alert("Open gallery - work in progress");
  };

  return (
    <>
      <IonButton expand="block" fill="outline" onClick={addOnClick}>
        Add
      </IonButton>
    </>
  );
};
