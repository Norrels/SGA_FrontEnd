import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useState} from "react";
import { CourseItem } from "./components/CourseItem";
import NewCourseModal from "./components/NewCourseModal";
import {
  CourseButtonContainer,
  CourseContainer,
  CourseContent,
  CourseList,
  CourseTitleContainer,
} from "./style";
import { ObjectsContext } from "../../Contexts/ObjectsContext";


export function Course() {
  const { courses } = useContext(ObjectsContext)
  const [open, setOpen] = useState(false);

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
              <NewCourseModal closeModal={closeModal}/>
            </Dialog.Root>
          </CourseButtonContainer>
        </CourseTitleContainer>
        <input
          type="text"
          placeholder="Buscar por curso"
          /*        onChange={handleSearch} */
        />

        <CourseList>
          {courses.map((course) => {
            if(course.ativo) {
              return <CourseItem key={courses.indexOf(course)} course={course} />;
            }
          })}
        </CourseList>
      </CourseContent>
    </CourseContainer>
  );
}
