import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useState } from "react";
import { CourseItem } from "./components/CourseItem";
import NewCourseModal from "./components/NewCourseModal";
import {
  CourseButtonContainer,
  CourseContainer,
  CourseContent,
  CourseList,
  CourseTitleContainer,
} from "./style";
import { CourseProps, ObjectsContext } from "../../Contexts/ObjectsContext";
import { API } from "../../lib/axios";

export function Course() {
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const { courses } = useContext(ObjectsContext);
  const [courseMatchs, setCourseMatchs] = useState<CourseProps[]>([]);

  if (courses.length > 0 && courseMatchs.length == 0) {
    setCourseMatchs(courses);
  }

  async function searchCourse(value: String) {
    if (value == "") {
      setCourseMatchs(courses);
    } else {
      const res = await API.get(`/curso/buscapalavra/${value}`);
      setCourseMatchs(res.data);
    }
  }
=======
  const { courses } = useContext(ObjectsContext)
  const [open, setOpen] = useState(false);
>>>>>>> 0b5e39f034e7aa927aef6ed26a431b7680614fbe

  function closeModal() {
    setOpen(false);
  }

  return (
    <CourseContainer>
      <CourseContent>
        <CourseTitleContainer>
          <h1>Cursos</h1>
          <p>Selecione um curso ou crie um novo!</p>
          <CourseButtonContainer>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button>Novo Curso</button>
              </Dialog.Trigger>
              <NewCourseModal closeModal={closeModal} />
            </Dialog.Root>
          </CourseButtonContainer>
        </CourseTitleContainer>
        <input
          type="text"
          placeholder="Buscar por curso"
          onChange={(e) => searchCourse(e.target.value)}
        />

        <CourseList>
          {courseMatchs.map((course) => {
            if (course.ativo) {
              return (
                <CourseItem key={course.id} course={course} />
              );
            }
          })}
        </CourseList>
      </CourseContent>
    </CourseContainer>
  );
}
