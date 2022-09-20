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

export function Teacher() {
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
          </TeacherButtonContainer>
        </TeacherTitleContainer>

        <input type="text" placeholder="Buscar por professor" />

        <TeacherList>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </TeacherList>
      </TeacherContent>
    </TeacherContainer>
  );
}
