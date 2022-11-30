import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect, useState } from "react";
import { CourseItem } from "./components/CourseItem";
import NewCourseModal from "./components/NewCourseModal";
import {
  CourseButtonContainer,
  CourseContainer,
  CourseContent,
  CourseList,
  CourseTitleContainer,
  Toggle,
} from "./style";
import { CourseProps, ObjectsContext } from "../../contexts/ObjectsContext";
import { API } from "../../lib/axios";
import { AuthContext } from "../../contexts/AuthContext";

export function Course() {
  document.title = "Cursos | SGA";

  const { courses } = useContext(ObjectsContext);
  const [courseMatchs, setCourseMatchs] = useState<CourseProps[]>([]);
  const [on, setOn] = useState<Boolean>(false);
  const { userToEdit } = useContext(AuthContext)
  //Variaveis é método criado para fecha a modal do radix
  const [open, setOpen] = useState(false);
  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    handleGetCourse();
  }, [courseMatchs]);

  async function handleGetCourse() {
    const resp = await API.get("/curso");

    if (resp.status == 200) {
      setCourseMatchs(resp.data);
    }
  }

  async function handleChangeList(value: Boolean) {
    setOn(value);
    if (value) {
      setCourseMatchs(courses.filter((e) => e.ativo == false));
    } else {
      setCourseMatchs(courses.filter((e) => e.ativo == true));
    }
  }

  async function searchCourse(value: String) {
    if (!value) {
      setCourseMatchs(courses);
    } else {
      const res = await API.get(`/curso/buscapalavra/${value}`);
      setCourseMatchs(res.data);
    }
  }

  return (
    <CourseContainer>
      <CourseContent>
        <CourseTitleContainer>
          <h1>Cursos</h1>
          <p>Selecione um curso ou crie um novo!</p>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <CourseButtonContainer>Novo Curso</CourseButtonContainer>
            </Dialog.Trigger>
            <NewCourseModal closeModal={closeModal} />
          </Dialog.Root>
        </CourseTitleContainer>
        <input
          type="text"
          placeholder="Busque um ou vários cursos..."
          onChange={(e) => searchCourse(e.target.value)}
        />
        {userToEdit.tipoUsuario == "SUPORTE" &&
          <Toggle>
            <label>Desativados</label>
            <input
              onChange={(e) => handleChangeList(e.target.checked)}
              type="checkbox"
            />
          </Toggle>
        }
        <CourseList>
          {courseMatchs.map((course) => {
            if (course.ativo && on == false) {
              return <CourseItem key={course.id} course={course} />;
            } else if (course.ativo == false && on == true) {
              return <CourseItem key={course.id} course={course} />;
            }
          })}
        </CourseList>
      </CourseContent>
    </CourseContainer>
  );
}
