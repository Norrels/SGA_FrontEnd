import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import { useState } from "react";
import { AbsenceProps } from "../..";
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

  return (
    <AbsenseItemContainer>
      <AbsenseItemInfoContainer>
        <AbsenseItemIcon>
          <CalendarX size={32} />
        </AbsenseItemIcon>

        <AbsenseItemInfoContent>
          <AbsenseInfoType>
            {absence.tipo == "FERIAS"
              ? "Férias"
              : absence.tipo.toLowerCase()}
          </AbsenseInfoType>
          <p>
            Data:
            <span>
              {" " + absence.dataInicio + " - " + absence.dataFinal}
            </span>
          </p>
        </AbsenseItemInfoContent>
      </AbsenseItemInfoContainer>

      <AbsenseItemButtonContainer>
        <Dialog.Root open={open}>
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

          <EditAbsenceTeacherModal absence={absence} closeModal={closeModal}/>
        </Dialog.Root>
        <AbsenseItemButton buttonColor="delete">
          <Trash color="white" size={26} />
        </AbsenseItemButton>
      </AbsenseItemButtonContainer>
    </AbsenseItemContainer>
  );
}
