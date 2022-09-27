import * as Dialog from "@radix-ui/react-dialog";
import { ChangeEvent, useEffect, useState } from "react";
import { CourseItem } from "./components/CourseItem";
import NewCourseModal from "./components/NewCourseModal";
import { API } from "../../lib/axios";
import {
  CourseButtonContainer,
  CourseContainer,
  CourseContent,
  CourseList,
  CourseTitleContainer,
} from "./style";

export interface CouseProps {
  id?: string;
  nome: string;
  tipoCurso: string;
  /* unidadeCurricular: {
    id?: string;
    nome: string;
    horas: string;
  }; */
}

export function Course() {
  const [courses, setCourses] = useState<CouseProps[]>([]);
  const [coursesFilted, setCoursesFilted] = useState<CouseProps[]>(courses);

  function addNewCourse(data: CouseProps) {
    setCourses([...courses, data]);
    setCoursesFilted([...coursesFilted, data]);
  }

  /* function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const coursesSearched = courses.filter((course) => {
      if (
        course.nome.toLowerCase().match(event.target.value) ||
        course.tipo.toLowerCase().match(event.target.value)
      ) {
        return course;
      }
    });
    setCoursesFilted(coursesSearched);
  }
 */
  async function fetchCourses() {
    const res = await API.get("curso");

    setCourses(res.data);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <CourseContainer>
      <CourseContent>
        <CourseTitleContainer>
          <h1>Cursos</h1>
          <p>Selecione um curso ou crie um novo!</p>
          <CourseButtonContainer>
            {/* <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo Curso</button>
              </Dialog.Trigger>
              <NewCourseModal addNewCourse={addNewCourse} />
            </Dialog.Root> */}
          </CourseButtonContainer>
        </CourseTitleContainer>
        <input
          type="text"
          placeholder="Buscar por curso"
          /*        onChange={handleSearch} */
        />

        <CourseList>
          {courses.map((course) => {
            return <CourseItem key={courses.indexOf(course)} course={course} />;
          })}
        </CourseList>
      </CourseContent>
    </CourseContainer>
  );
}
