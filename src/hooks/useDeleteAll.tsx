import React, { FC, useState } from "react";
import { IonButton, IonAlert } from "@ionic/react";

interface Params {
  onConfirm: () => void;
}

export const useDeleteAll = ({ onConfirm }: Params) => {
  const [confirmationVisible, setConfirmationVisible] = useState<boolean>(false);

  const DeleteAllButton: FC = () => {
    return (
      <IonButton fill="outline" color="danger" onClick={() => setConfirmationVisible(true)}>
        Delete All
      </IonButton>
    );
  };

  const DeleteAllConfirmationAlert: FC = () => {
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
            handler: () => {
              onConfirm();
              setConfirmationVisible(false);
            }
          }
        ]}
      />
    );
  };

  return { DeleteAllButton, DeleteAllConfirmationAlert };
};
