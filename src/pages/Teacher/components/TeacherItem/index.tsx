import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Trash } from "phosphor-react";
import { Teacher } from "../../../../Contexts/ObjectsContext";
import { DisableTeacherModal } from "../DisableTeacherModal";
import { EditTeacherModal, TeacherType } from "../EditTeacherModal";
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

  function editTeacher(data: TeacherType) {
    console.log(data)
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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TeacherItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </TeacherItemButton>
          </Dialog.Trigger>
          <EditTeacherModal
            editNewTeacher={editTeacher}
            teacherItem={teacherItem}
          />
        </Dialog.Root>

        <TeacherItemButton buttonColor="delete">
          <Dialog.Root>
            <Dialog.Trigger
              style={{
                backgroundColor: "#5AADD1",
                border: "none",
                display: "flex",
              }}
            >
              <Trash color="white" size={25} />
            </Dialog.Trigger>
            <DisableTeacherModal />
          </Dialog.Root>
        </TeacherItemButton>
      </TeacherItemButtonContainer>
    </TeacherItemContainer>
  );
}
