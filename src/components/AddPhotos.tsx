import React, { FC, useRef } from "react";
import { IonButton } from "@ionic/react";

import { addPhoto } from "../data/photos";

interface Props {
  refreshList: () => void;
}

export const AddPhotos: FC<Props> = ({ refreshList }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addOnClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleChange = (files: FileList | null) => {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend = result => {
          addPhoto({
            date: new Date().toISOString(),
            base64: result?.target?.result as string
          });
          refreshList();
        };
      }
    }
  };

  return (
    <>
      <IonButton expand="block" fill="outline" onClick={addOnClick}>
        Add
      </IonButton>

      <input
        multiple
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="ion-hide"
        onChange={e => handleChange(e.target.files)}
      />
    </>
  );
};
