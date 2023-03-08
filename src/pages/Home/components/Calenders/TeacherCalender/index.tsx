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
import { EditClassModalProps } from "../../EditClassModal";
import { EditAllClassModalProps } from "../../EditAllClassModal";

interface CalenderProps {
  days: Date[];
  today: Date;
}

export interface AulaProps {
  id: string;
  partitionKey?: number
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

export function CalenderTeacher({ days, today }: CalenderProps) {
  const { placesList } = useContext(ResourcesContext);
  const [aulas, setAulas] = useState<AulaProps[]>([]);
  const { teachers } = useContext(ResourcesContext);

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

  async function handleDeleteClassesByPartitioKey(partionKey: number | undefined) {
    const res = await API.delete(`/aula/key/${partionKey}`);
    if (res.status == 200) {
      const aulaWithoutDeletedOne = aulas.filter((aula) => {
        return aula.partitionKey != partionKey
      })
      setAulas(aulaWithoutDeletedOne)
    }
  }



  function handleEditAllClass(data: EditAllClassModalProps) {
    const aulasEditadas = aulas.map((aula) => {
      console.log(new Date(aula.data.replace(/(\d*)\/(\d*)\/(\d*).*/, "$3-$2-$1")))
      console.log(new Date(data.dataFinal))
      if (aula.partitionKey == data.partitionKey && new Date(aula.data.replace(/(\d*)\/(\d*)\/(\d*).*/, "$3-$2-$1")) <= new Date(data.dataFinal)) {
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

  const placesInClass = aulas.map((aula) => aula.ambiente);

  const placesToShow = placesList.filter((places) => {
    if (places.ativo == true) {
      return places;
    }

    if (places.ativo == false) {
      const placeInClass = placesInClass.find((placeToFind) => {
        return placeToFind.id === places.id;
      });

      if (placeInClass !== undefined) {
        return placeInClass;
      }
    }
  });

  return (
    <HomeCalenderContainer>
      <HomeCalenderHeader>
        <HomeCalenderOrderBy>
          <p>Ambientes</p>
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
      {placesToShow.map((places) => {

        return (
          <div key={places.id}>
            <HomeCalenderContent >
              <HomePlaces>
                <p>{places.nome}</p>
              </HomePlaces>
              <HomeClassesContainer>
                {days?.map((day) => {
                  return (
                    <HomeClasses key={day.getDate()}>
                      {aulas?.map((aula) => {
                        return (
                          aula.data == format(day, "dd/MM/yyyy") &&
                          aula.ambiente.id == places.id && (
                            <ContextMenu.Root key={aula.id}>
                              <HomeButtonClickRoot
                                period={
                                  aula.periodo == "MANHA"
                                    ? "MANHA"
                                    : aula.periodo == "TARDE"
                                      ? "TARDE"
                                      : aula.periodo == "NOITE"
                                        ? "NOITE" : "INTEGRAL"
                                }
                              >
                                <HomeClass
                                  period={
                                    aula.periodo == "MANHA"
                                      ? "MANHA"
                                      : aula.periodo == "TARDE"
                                        ? "TARDE"
                                        : aula.periodo == "NOITE"
                                          ? "NOITE" : "INTEGRAL"
                                  }
                                >
                                  <p>{aula.professor.nome}</p>
                                  <sup>{aula.unidadeCurricular.nome}</sup>
                                </HomeClass>
                              </HomeButtonClickRoot>
                              <RightClick
                                aulas={aula}
                                handleEditClass={handleEditClass}
                                handleEditAllClasses={handleEditAllClass}
                                deleteClasses={handleDeleteClassesByPartitioKey}
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
