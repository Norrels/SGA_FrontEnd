import * as Toast from "@radix-ui/react-toast";
import { Check, CheckCircle, Prohibit, X } from "phosphor-react";
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
  tipe: "Sucesso" | "Erro";
}

export function Notification({
  openNotification,
  openNotificationMethod,
  title,
  description,
  tipe,
}: NotificationProps) {
  return (
    <Toast.Provider duration={3000} swipeDirection="right">
      <NotificationContainer
        open={openNotification}
        onOpenChange={openNotificationMethod}
        duration={3000}
      >
        {tipe == "Sucesso" ? (
          <CheckCircle size={35} color="#00d10a" />
        ) : (
          <Prohibit size={35} color="#B50000" />
        )}

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
