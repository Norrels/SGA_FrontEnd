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
  const courses = [
    {
      id: 1,
      nome: "DSV 3S NOITE",
      tipoCurso: "CT",
      cargaHoraria: "1120h",
      unidadeCurricular: [
        {
          UnidadeCurricular: "Photoshop",
          Horas: 40,
        },
        {
          UnidadeCurricular: "Power Point",
          Horas: 40,
        },
        {
          UnidadeCurricular: "Excel",
          Horas: 40,
        },
      ],
    },
    {
      id: 2,
      nome: "DSV 3S TARDE",
      tipoCurso: "CT",
      cargaHoraria: "1120h",
      unidadeCurricular: [
        {
          UnidadeCurricular: "Java",
          Horas: 40,
        },
        {
          UnidadeCurricular: "C#",
          Horas: 40,
        },
        {
          UnidadeCurricular: "C++",
          Horas: 40,
        },
      ],
    },
  ];

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
          {courses.map((value) => (
            <CourseItem
              key={value.id}
              id={value.id}
              name={value.nome}
              tipoCurso={value.tipoCurso}
              cargaHoraria={value.cargaHoraria}
              unidadeCurricular={value.unidadeCurricular}
            />
          ))}
        </CourseList>
      </CourseContent>
    </CourseContainer>
  );
}
