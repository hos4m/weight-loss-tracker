import React, { useState, FC } from "react";
import { IonAlert, IonButton } from "@ionic/react";

export const useDeletePhotosByDay = (onConfirm: Function) => {
  const [confirmationVisible, setConfirmationVisible] = useState<boolean>(false);

  const DeleteDayConfirmationAlert: FC = () => {
    return (
      <IonAlert
        isOpen={confirmationVisible}
        header="Are you sure?"
        message="This will be deleted permanently"
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => setConfirmationVisible(false)
          },
          {
            text: "Yes",
            handler: () => onConfirm()
          }
        ]}
      />
    );
  };

  const DeleteThisDayButton: FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <IonButton
        size="small"
        color="danger"
        onClick={() => {
          onClick();
          setConfirmationVisible(true);
        }}
      >
        Delete this day
      </IonButton>
    );
  };

  return { DeleteDayConfirmationAlert, DeleteThisDayButton };
};
