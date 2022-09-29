import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Trash } from "phosphor-react";
import { useState } from "react";
import { Teacher } from "../..";
import { DisableTeacherModal } from "../DisableTeacherModal";
import { EditTeacherModal } from "../EditTeacherModal";
import {
  TeacherItemButton,
  TeacherItemButtonContainer,
  TeacherItemContainer,
  TeacherItemInfoContainer,
  TeacherItemInfoContent,
} from "./style";

interface TeacherItemProps {
  teacherItem: Teacher;
}

export function TeacherItem({ teacherItem }: TeacherItemProps) {
  var i = 0;
  function onExit() {
    console.log(i++);
  }

  return (
    <TeacherItemContainer>
      <TeacherItemInfoContainer>
        <img alt="" src={teacherItem.foto} />

        <TeacherItemInfoContent>
          <h3>{teacherItem.nome}</h3>
          <p>Carga horária: {teacherItem.cargaSemanal}hs</p>
        </TeacherItemInfoContent>
      </TeacherItemInfoContainer>

      <TeacherItemButtonContainer>
        <Dialog.Root onOpenChange={() => onExit()}>
          <Dialog.Trigger asChild>
            <TeacherItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </TeacherItemButton>
          </Dialog.Trigger>
          {/* <EditTeacherModal
            
            teacherItem={teacherItem}
          /> */}
        </Dialog.Root>

        <TeacherItemButton buttonColor="delete">
          <Dialog.Root>
            <Dialog.Trigger style={{backgroundColor: "#5AADD1", border: "none", display: "flex"}}>
              <Trash color="white" size={25} />
            </Dialog.Trigger>
            <DisableTeacherModal />
          </Dialog.Root>
        </TeacherItemButton>
      </TeacherItemButtonContainer>
    </TeacherItemContainer>
  );
}
