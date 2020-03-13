import React, { FC, useRef } from "react";
import { IonButton } from "@ionic/react";

export const AddPhotos: FC = () => {
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
          console.log("----------------------------");
          console.log(result);
          console.log("----------------------------");
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
      ></input>
    </>
  );
};
