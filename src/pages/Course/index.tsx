import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useState } from "react";
import { CourseItem } from "./components/CourseItem";
import NewCourseModal from "./components/NewCourseModal";
import { ResourcesContext } from "../../contexts/ResourcesContext";
import { AuthContext } from "../../contexts/AuthContext";
import { ButtonModal, Content, HeadingButtonContainer, MainContainer, SearchInput, TitleContainer, Toggle } from "../../styles/commonStyle";

import { ListContainer } from "../../styles/listStyle";

export function Course() {
  document.title = "Cursos | SGA";

  const { courses } = useContext(ResourcesContext);
  const [showDisable, setShowDisable] = useState<Boolean>(false);
  const [search, setSearch] = useState("");
  const { userAutheticated } = useContext(AuthContext);
  //Variaveis é método criado para fecha a modal do radix
  const [open, setOpen] = useState(false);

  let filteredCourses =
  courses.length > 0
    ? courses.filter((course) => course.nome?.toLowerCase().includes(search))
    : [];

  function closeModal() {
    setOpen(false);
  }

  return (
    <MainContainer>
      <Content>
        <TitleContainer>
          <h1>Cursos</h1>
          <p>Selecione um curso ou crie um novo!</p>
          <HeadingButtonContainer>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <ButtonModal>Novo Curso</ButtonModal>
              </Dialog.Trigger>
              <NewCourseModal closeModal={closeModal} />
            </Dialog.Root>
          </HeadingButtonContainer>
        </TitleContainer>
        <SearchInput
          type="text"
          placeholder="Busque um ou vários cursos..."
          onChange={(e) => setSearch(e.target.value)}
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
          {filteredCourses.map((course) => {
            if (course.ativo && showDisable == false) {
              return <CourseItem key={course.id} course={course} />;
            } else if (course.ativo == false && showDisable == true) {
              return <CourseItem key={course.id} course={course} />;
            }
          })}
        </ListContainer>
      </Content>
    </MainContainer>
  );
}
