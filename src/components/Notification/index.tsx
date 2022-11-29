import * as Toast from "@radix-ui/react-toast";
import { Prohibit, X } from "phosphor-react";
import {
  NotificationCloseButton,
  NotificationContainer,
  NotificationDescription,
  NotificationTitle,
  ViewPortContainer,
} from "./style";

interface NotificationProps {
  openNotification: boolean;
  openNotificationMethod: () => void;
  title?: string;
  description?: string;
  tipe: "Error" | "Criado"
}

export function Notification({
  openNotification,
  openNotificationMethod,
  title,
  description,
}: NotificationProps) {
  return (
    <Toast.Provider duration={3000} swipeDirection="right">
      <NotificationContainer
        open={openNotification}
        onOpenChange={openNotificationMethod}
        duration={3000}
      >
        
        <Prohibit size={30} color="#B50000"/>
        <NotificationTitle asChild>
          <strong>{title}</strong>
        </NotificationTitle>
        <NotificationDescription>{description}</NotificationDescription>
        <NotificationCloseButton>
          <X size={20} />
        </NotificationCloseButton>
      </NotificationContainer>
      <ViewPortContainer />
    </Toast.Provider>
  );
}
