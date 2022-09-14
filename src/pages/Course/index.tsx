import { CourseItem } from "./components/CourseItem";
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
            <button>Novo Curso</button>
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
