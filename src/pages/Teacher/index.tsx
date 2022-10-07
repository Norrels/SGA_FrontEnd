import { TeacherItem } from "./components/TeacherItem";
import {
  TeacherContainer,
  TeacherContent,
  TeacherTitleContainer,
  TeacherButtonContainer,
  TeacherList,
} from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { AvaliableModal } from "./components/AvaliableModal";
import NewTeacherModal from "./components/NewTeacherModal";
import { useContext } from "react";
import { ObjectsContext } from "../../Contexts/ObjectsContext";
import { NewVacation } from "./components/NewVacation";

export function Teacher() {
  const { teachers } = useContext(ObjectsContext)

  return (
    <TeacherContainer>
      <TeacherContent>
        <TeacherTitleContainer>
          <h1>Professores</h1>
          <p>Selecione um Professor ou crie um novo!</p>
          <TeacherButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo professor</button>
              </Dialog.Trigger>

              <NewTeacherModal />
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Disponibilidade</button>
              </Dialog.Trigger>

              <AvaliableModal />
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Férias</button>
              </Dialog.Trigger>
              <NewVacation />
            </Dialog.Root>
          </TeacherButtonContainer>
        </TeacherTitleContainer>

        <input type="text" placeholder="Buscar por professor" />

        <TeacherList>
          {teachers.map((teacher) => {
            if (teacher.ativo) {
              return <TeacherItem key={teacher.id} teacherItem={teacher}/>
            }
          })}
        </TeacherList>
      </TeacherContent>
    </TeacherContainer>
  );
}
