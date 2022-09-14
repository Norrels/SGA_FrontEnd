import * as Dialog from "@radix-ui/react-dialog";
import { CourseItem } from "./components/CourseItem";
import NewCourseModal from "./components/NewCourseModal";
import {
  CourseButtonContainer,
  CourseContainer,
  CourseContent,
  CourseList,
  CourseTitleContainer,
} from "./style";

export function Course() {
  return (
    <CourseContainer>
      <CourseContent>
        <CourseTitleContainer>
          <h1>Cursos</h1>
          <p>Selecione um curso ou crie um novo!</p>
          <CourseButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo Curso</button>
              </Dialog.Trigger>
              <NewCourseModal />
            </Dialog.Root>
          </CourseButtonContainer>
        </CourseTitleContainer>
        <input type="text" placeholder="Buscar por Curso" />

        <CourseList>
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </CourseList>
      </CourseContent>
    </CourseContainer>
  );
}
