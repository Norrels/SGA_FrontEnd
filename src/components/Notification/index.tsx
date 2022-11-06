import * as Toast from "@radix-ui/react-toast";
import { Info, X } from "phosphor-react";
import {
  NotificationCloseButton,
  NotificationContainer,
  NotificationDescription,
  NotificationTitle,
  ViewPortContainer,
} from "./style";


interface NotificationProps {
  openNotification: boolean;
  openNotificationMethod: () => void
}

export function Notification({openNotification, openNotificationMethod}: NotificationProps){
  


  return (
    <Toast.Provider duration={3000} swipeDirection="right">
      <NotificationContainer open={openNotification} onOpenChange={openNotificationMethod} duration={3000}>
        <Info size={30} />
        <NotificationTitle>Criado com sucesso</NotificationTitle>
        <NotificationDescription>
          O curso foi criado com sucesso
        </NotificationDescription>
        <NotificationCloseButton>
          <X size={20} />
        </NotificationCloseButton>
      </NotificationContainer>
      <ViewPortContainer />
    </Toast.Provider>
  );
}
