import {
  HomeButtonClickRoot,
  HomeCalenderContainer,
  HomeCalenderContent,
  HomeCalenderDay,
  HomeCalenderHeader,
  HomeCalenderHeaderDays,
  HomeCalenderOrderBy,
  HomeClass,
  HomeClasses,
  HomeClassesContainer,
  HomeDivider,
  HomePlaces,
} from "./style";
import * as ContextMenu from "@radix-ui/react-context-menu";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { RightClick } from "../../RightClick";
import { useContext, useEffect, useState } from "react";
import {
  CourseProps,
  ResourcesContext,
  PlaceProps,
  TeacherProps,
} from "../../../../../contexts/ResourcesContext";
import { API } from "../../../../../lib/axios";
import { EditAllClassModalProps } from "../../EditAllClassModal";

interface CalenderProps {
  days: Date[];
  today: Date;
}

export interface EditClassModalProps {
  professor: string;
  ambientes: string;
  data: string;
  id: string;
}

export interface AulaProps {
  id: string;
  partitionKey?: number;
  dataFinal: string;
  professor: TeacherProps;
  ambiente: PlaceProps;
  cargaDiaria: number;
  data: string;
  dataInicio: string;
  unidadeCurricular: {
    id: number;
    nome: string;
    horas: 40;
  };
  curso: CourseProps;
  codTurma: string;
  periodo: string;
}

export function Calender({ days, today }: CalenderProps) {
  const { teachers } = useContext(ResourcesContext);
  const [aulas, setAulas] = useState<AulaProps[]>([]);

  const teachersInClass = aulas.map((aula) => aula.professor);

  const teacherToShow = teachers.filter((teacher) => {
    if (teacher.ativo == true) {
      return teacher;
    }

    if (teacher.ativo == false) {
      const teacherInClass = teachersInClass.find((teacherToFind) => {
        return teacherToFind.id === teacher.id;
      });

      if (teacherInClass !== undefined) {
        return teacherInClass;
      }
    }
  });


  async function fetchAulas() {
    const response = await API.get(
      `aula/lista?dataInicio=${format(
        days[0],
        "yyyy'-'MM'-'dd"
      )}&dataFinal=${format(days[6], "yyyy'-'MM'-'dd")}`
    );
    setAulas(response.data);
  }

  useEffect(() => {
    fetchAulas();
  }, [days]);

  function handleEditClass(data: EditClassModalProps) {
    const aulasEditadas = aulas.map((aula) => {
      if (aula.id == data.id) {
        aula.ambiente.id = data.ambientes;
        aula.professor.id = data.professor;
        aula.dataInicio = data.data;
        aula.professor.nome = teachers.find(
          (element) => element.id == data.professor
        )?.nome;
      }
      return aula;
    });

    setAulas(aulasEditadas);
  }

  function handleEditAllClass(data: EditAllClassModalProps) {

    const aulasEditadas = aulas.map((aula) => {
      if (aula.partitionKey == data.partitionKey) {
        aula.ambiente.id = data.ambiente;
        aula.professor.id = data.professor;
        aula.dataInicio = data.dataInicio;
        aula.professor.nome = teachers.find(
          (element) => element.id == data.professor
        )?.nome;
      }
      return aula;
    });

    setAulas(aulasEditadas);
  }

  async function handleDeleteClassesByPartitioKey(
    partionKey: number | undefined
  ) {
    const res = await API.delete(`/aula/key/${partionKey}`);
    if (res.status == 200) {
      const aulaWithoutDeletedOne = aulas.filter((aula) => {
        return aula.partitionKey != partionKey;
      });
      setAulas(aulaWithoutDeletedOne);
    }
  }

  return (
    <HomeCalenderContainer>
      <HomeCalenderHeader>
        <HomeCalenderOrderBy>
          <p>Professores</p>
        </HomeCalenderOrderBy>
        <HomeCalenderHeaderDays>
          {days?.map((day) => {
            return (
              <HomeCalenderDay
                key={day.getDay()}
                days={
                  format(day, "d' 'L") === format(today, "d' 'L")
                    ? "today"
                    : "notToday"
                }
              >
                <strong>{parseInt(format(day, "d"))}</strong>
                <p>
                  {format(day, "eee", {
                    locale: ptBR,
                  })}
                </p>
              </HomeCalenderDay>
            );
          })}
        </HomeCalenderHeaderDays>
      </HomeCalenderHeader>
      {teacherToShow.map((teacher) => {
        return (
          <div key={teacher?.id}>
            <HomeCalenderContent>
              <HomePlaces>
                <p>{teacher?.nome}</p>
              </HomePlaces>
              <HomeClassesContainer>
                {days?.map((day) => {
                  return (
                    <HomeClasses key={day.getDate()}>
                      {aulas?.map((aula) => {
                        return (
                          aula.data.toString() == format(day, "dd/MM/yyyy") &&
                          aula.professor.id == teacher?.id && (
                            <ContextMenu.Root key={aula.id}>
                              <HomeButtonClickRoot
                                period={
                                  aula.periodo == "MANHA"
                                    ? "MANHA"
                                    : aula.periodo == "TARDE"
                                    ? "TARDE"
                                    : aula.periodo == "NOITE"
                                    ? "NOITE"
                                    : "INTEGRAL"
                                }
                              >
                                <HomeClass
                                  period={
                                    aula.periodo == "MANHA"
                                      ? "MANHA"
                                      : aula.periodo == "TARDE"
                                      ? "TARDE"
                                      : aula.periodo == "NOITE"
                                      ? "NOITE"
                                      : "INTEGRAL"
                                  }
                                >
                                  <p>{aula.ambiente.nome}</p>
                                  <sup>{aula.unidadeCurricular.nome}</sup>
                                </HomeClass>
                              </HomeButtonClickRoot>
                              <RightClick
                                deleteClasses={handleDeleteClassesByPartitioKey}
                                handleEditAllClasses={handleEditAllClass}
                                aulas={aula}
                                handleEditClass={handleEditClass}
                              />
                            </ContextMenu.Root>
                          )
                        );
                      })}
                    </HomeClasses>
                  );
                })}
              </HomeClassesContainer>
            </HomeCalenderContent>
            <HomeDivider />
          </div>
        );
      })}
    </HomeCalenderContainer>
  );
}
