import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import { AbsenseInfoType } from "../../style";
import { EditAbsenceTeacherModal } from "../EditAbsenceTeacherModal";

import {
  AbsenseItemButton,
  AbsenseItemButtonContainer,
  AbsenseItemContainer,
  AbsenseItemIcon,
  AbsenseItemInfoContainer,
  AbsenseItemInfoContent,
} from "./style";

export function AbsenseItem() {
  return (
    <AbsenseItemContainer>
      <AbsenseItemInfoContainer>
        <AbsenseItemIcon>
          <CalendarX size={32} />
        </AbsenseItemIcon>

        <AbsenseItemInfoContent>
          <AbsenseInfoType>Ausência</AbsenseInfoType>
          <p>
            Data: <span>07/09/2022 - 09/09/2022</span>
          </p>
        </AbsenseItemInfoContent>
      </AbsenseItemInfoContainer>

      <AbsenseItemButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger>
            <AbsenseItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </AbsenseItemButton>
          </Dialog.Trigger>

          <EditAbsenceTeacherModal />

        </Dialog.Root>
        <AbsenseItemButton buttonColor="delete">
          <Trash color="white" size={25} />
        </AbsenseItemButton>
      </AbsenseItemButtonContainer>
    </AbsenseItemContainer>
  );
}
