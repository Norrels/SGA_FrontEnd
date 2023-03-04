import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import { useState } from "react";
import { AbsenceProps } from "../..";
import { DeleteAlertCall } from "../../../../components/DeleteAlertCall";
import { API } from "../../../../lib/axios";
import { AbsenseInfoType } from "../../components/AbsenseItem/style";
import { AbsenseList } from "../../style";
import { EditAbsenceTeacherModal } from "../EditAbsenceTeacherModal";

import {
  AbsenseItemButton,
  AbsenseItemButtonContainer,
  AbsenseItemContainer,
  AbsenseItemIcon,
  AbsenseItemInfoContainer,
  AbsenseItemInfoContent,
} from "./style";
interface AbsenceItemProps {
  absence: AbsenceProps;
}

export function AbsenseItem({ absence }: AbsenceItemProps) {
  const [open, setOpen] = useState(false);
  

  function closeModal() {
    setOpen(false);
  }

  async function handleDeleteAbsence() {
    const res = await API.delete(`/ausencia/${absence.id}`);
    if (res.status == 200) {
      window.location.reload();
    }
  }

  return (
    <AbsenseItemContainer>
      <AbsenseItemInfoContainer>
        <AbsenseItemIcon>
          <CalendarX size={32} />
        </AbsenseItemIcon>

        <AbsenseItemInfoContent>
          <AbsenseInfoType>
            {absence.tipo == "FERIAS" ? "Férias" : absence.tipo.toLowerCase()}
          </AbsenseInfoType>
          <p>
            Data:
            <span>{" " + absence.dataInicio + " - " + absence.dataFinal}</span>
          </p>
        </AbsenseItemInfoContent>
      </AbsenseItemInfoContainer>

      <AbsenseItemButtonContainer>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
            }}
          >
            <AbsenseItemButton buttonColor="edit">
              <DotsThree color="#fff" size={32} />
            </AbsenseItemButton>
          </Dialog.Trigger>

          <EditAbsenceTeacherModal absence={absence} closeModal={closeModal} />
        </Dialog.Root>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <AbsenseItemButton buttonColor="delete">
              <Trash color="white" size={26} />
            </AbsenseItemButton>
          </AlertDialog.Trigger>
          <DeleteAlertCall deleteById={handleDeleteAbsence} />
        </AlertDialog.Root>
      </AbsenseItemButtonContainer>
    </AbsenseItemContainer>
  );
}
