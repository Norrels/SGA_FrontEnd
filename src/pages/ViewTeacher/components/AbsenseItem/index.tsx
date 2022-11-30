import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import { AbsenseProps } from "../..";
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

interface AbsenseItemProps {
  absenceList: AbsenseProps;
}

export function AbsenseItem({ absenceList }: AbsenseItemProps) {
  return (
    <AbsenseItemContainer>
      <AbsenseItemInfoContainer>
        <AbsenseItemIcon>
          <CalendarX size={32} />
        </AbsenseItemIcon>

        <AbsenseItemInfoContent>
          <AbsenseInfoType>
            {absenceList.tipo == "FERIAS"
              ? "Férias"
              : absenceList.tipo.toLowerCase()}
          </AbsenseInfoType>
          <p>
            Data:
            <span>
              {" " + absenceList.dataInicio + " - " + absenceList.dataFinal}
            </span>
          </p>
        </AbsenseItemInfoContent>
      </AbsenseItemInfoContainer>

      <AbsenseItemButtonContainer>
        <Dialog.Root>
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

          {/* <EditAbsenceTeacherModal absence={} closeModal={closeModal}/> */}
        </Dialog.Root>
        <AbsenseItemButton buttonColor="delete">
          <Trash color="white" size={26} />
        </AbsenseItemButton>
      </AbsenseItemButtonContainer>
    </AbsenseItemContainer>
  );
}
