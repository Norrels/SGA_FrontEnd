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
  ObjectsContext,
  PlaceProps,
  TeacherProps,
} from "../../../../../contexts/ObjectsContext";
import { API } from "../../../../../lib/axios";

interface CalenderProps {
  days: Date[];
  today: Date;
}

export interface EditClassModalProps {
  professor: number;
  ambientes: number;
  data: string;
  id: number;
}

export interface AulaProps {
  id: number;
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
  const { teachers } = useContext(ObjectsContext);
  const [open, setOpen] = useState(false);
  const [aulas, setAulas] = useState<AulaProps[]>([]);

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
    const teacherName = teachers.find(
      (element) => element.id == data.professor
    );
    console.log(data.professor);
    const aulasEditadas = aulas.map((aula) => {
      if (aula.id === data.id) {
        aula.ambiente.id = data.ambientes;
        aula.professor.id = data.professor;
        aula.dataInicio = data.data;
        aula.professor.nome = teacherName!.nome;
      }
      return aula;
    });

    setAulas(aulasEditadas);
  }

  return (
    <HomeCalenderContainer>
      <HomeCalenderHeader>
        <HomeCalenderOrderBy>
          <p>Crescente</p>
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
      {teachers.map((teacher) => {
        return (
          <div key={teacher.id}>
            <HomeCalenderContent>
              <HomePlaces>
                <p>{teacher.nome}</p>
              </HomePlaces>
              <HomeClassesContainer>
                {days?.map((day) => {
                  return (
                    <HomeClasses key={day.getDate()}>
                      {aulas?.map((aula) => {
                        return (
                          aula.data.toString() == format(day, "dd/MM/yyyy") &&
                          aula.professor.id == teacher.id && (
                            <ContextMenu.Root key={aula.id}>
                              <HomeButtonClickRoot
                                period={
                                  aula.periodo == "MANHA"
                                    ? "MANHA"
                                    : aula.periodo == "TARDE"
                                    ? "TARDE"
                                    : "NOITE"
                                }
                              >
                                <HomeClass
                                  period={
                                    aula.periodo == "MANHA"
                                      ? "MANHA"
                                      : aula.periodo == "TARDE"
                                      ? "TARDE"
                                      : "NOITE"
                                  }
                                >
                                  <p>{aula.ambiente.nome}</p>
                                  <sup>{aula.unidadeCurricular.nome}</sup>
                                </HomeClass>
                              </HomeButtonClickRoot>
                              <RightClick
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
