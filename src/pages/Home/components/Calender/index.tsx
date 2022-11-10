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

import {
  format,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { RightClick } from "../RightClick";
import { useContext, useEffect, useState } from "react";
import { CourseProps, ObjectsContext, PlaceProps, TeacherProps } from "../../../../contexts/ObjectsContext";
import { API } from "../../../../lib/axios";

interface CalenderProps {
  days: Date[];
  today: Date;
  aulas: AulaProps[]
}

export interface AulaProps {
  id: number,
  professor: TeacherProps,
  ambiente: PlaceProps,
  cargaDiaria: number,
  data: Date,
  unidadeCurricular: {
    id: number,
    nome: string,
    horas: 40
  },
  curso: CourseProps,
  codTurma: string,
  periodo: string
}

export function Calender({ days, today }: CalenderProps) {
  const { placesList } = useContext(ObjectsContext);
  const [open, setOpen] = useState(false);
  const [aulas, setAulas] = useState<AulaProps[]>([]);

  async function fetchAulas() {
    const response = await API.get(`aula/lista?dataInicio=${format(days[0], "yyyy'-'MM'-'dd")}&dataFinal=${format(days[6], "yyyy'-'MM'-'dd")}`)
    setAulas(response.data)
  }

  const daysFormatados = days.map((day) => {
    return format(day, "MM'/'dd'/'yyyy")
  })

  console.log(daysFormatados)
  console.log(days)

  useEffect(() => {
    fetchAulas()
  }, [days])

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
                days={format(day, "d' 'L") === format(today, "d' 'L") ? "today" : "notToday"}
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
      {
        placesList.map((place) => {
          return (
            <div key={place.id}>
              <HomeCalenderContent >
                <HomePlaces>
                  <p>{place.nome}</p>
                </HomePlaces>
                <HomeClassesContainer>
                  {
                    days?.map((day, index) => {
                      return (
                        <HomeClasses key={day.getDate()}>
                          {
                            aulas?.map((aula, index) => { 
                              return (
                                aula.data.toString() == format(day, "dd/MM/yyyy") && aula.ambiente.id == place.id &&
                                <ContextMenu.Root  key={aula.id}>
                                  <HomeButtonClickRoot period={aula.periodo == "MANHA" ? "MANHA" : aula.periodo == "TARDE" ? "TARDE" : "NOITE" }>
                                    <HomeClass period={aula.periodo == "MANHA" ? "MANHA" : aula.periodo == "TARDE" ? "TARDE" : "NOITE" }  >
                                      <p>{aula.professor.nome}</p>
                                      <sup>{aula.unidadeCurricular.nome}</sup>
                                    </HomeClass>
                                  </HomeButtonClickRoot>
                                  <RightClick aulas={aula} />
                                </ContextMenu.Root>
                              )
                            })}
                        </HomeClasses>
                      )
                    })}
                  
                </HomeClassesContainer>
               
              </HomeCalenderContent>
              <HomeDivider/>
            </div>
          )
        })
      }
    </HomeCalenderContainer>
  );
}
