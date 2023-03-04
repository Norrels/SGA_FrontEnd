import { TeacherItem } from "./components/TeacherItem";
import * as Dialog from "@radix-ui/react-dialog";
import { AvaliableModal } from "./components/AvaliableModal";
import NewTeacherModal from "./components/NewTeacherModal";
import { useContext, useState } from "react";
import { ResourcesContext } from "../../contexts/ResourcesContext";
import { NewVacation } from "./components/NewVacation";
import { AuthContext } from "../../contexts/AuthContext";
import {
  ButtonModal,
  Content,
  HeadingButtonContainer,
  HeadingContainer,
  MainContainer,
  SearchInput,
  TitleContainer,
  Toggle,
} from "../../styles/commonStyle";

import { ListContainer } from "../../styles/listStyle";
import { Heading } from "../Components/Heading";

export function Teacher() {
  document.title = "Professores | SGA";

  const { teachers } = useContext(ResourcesContext);
  const [openModalNewTeacher, setOpenModalNewTeacher] = useState(false);
  const [showDisable, setShowDisable] = useState<Boolean>(false);
  const [search, setSearch] = useState("");
  const [openModalVacations, setOpenModalVacations] = useState(false);
  const { userAutheticated } = useContext(AuthContext);

  let filteredTeachers =
    teachers.length > 0
      ? teachers.filter((teacher) =>
          teacher.nome?.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  function closeModalNewTeacher() {
    setOpenModalNewTeacher(false);
  }

  function closeModalVacations() {
    setOpenModalVacations(false);
  }
  return (
    <MainContainer>
      <Content>
        <HeadingContainer>
          <Heading
            title="Professores"
            subtitle="Selecione um professor ou crie um novo!"
          />
          <HeadingButtonContainer>
            <Dialog.Root
              open={openModalNewTeacher}
              onOpenChange={setOpenModalNewTeacher}
            >
              <Dialog.Trigger asChild>
                <ButtonModal>Novo professor</ButtonModal>
              </Dialog.Trigger>
              <NewTeacherModal closeModal={closeModalNewTeacher} />
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <ButtonModal>Disponibilidade</ButtonModal>
              </Dialog.Trigger>
              <AvaliableModal />
            </Dialog.Root>

            <Dialog.Root
              open={openModalVacations}
              onOpenChange={setOpenModalVacations}
            >
              <Dialog.Trigger asChild>
                <ButtonModal>Férias</ButtonModal>
              </Dialog.Trigger>
              <NewVacation closeModal1={closeModalVacations} />
            </Dialog.Root>
          </HeadingButtonContainer>
        </HeadingContainer>

        <SearchInput
          type="text"
          placeholder="Busque um ou vários professores..."
          onChange={(v) => setSearch(v.target.value)}
        />
        {userAutheticated.tipoUsuario == "ADMINISTRADOR" && (
          <Toggle>
            <label>Desativados</label>
            <input
              onChange={(e) => setShowDisable(e.target.checked)}
              type="checkbox"
            />
          </Toggle>
        )}
        <ListContainer>
          {filteredTeachers.map((teacher) => {
            if (teacher.ativo && showDisable == false) {
              return <TeacherItem key={teacher.id} teacherItem={teacher} />;
            } else if (teacher.ativo == false && showDisable == true) {
              return <TeacherItem key={teacher.id} teacherItem={teacher} />;
            }
          })}
        </ListContainer>
      </Content>
    </MainContainer>
  );
}
