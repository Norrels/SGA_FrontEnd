import {
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
import { CourseProps, ObjectsContext, PlaceProps, TeacherProps } from "../../../../Contexts/ObjectsContext";
import { API } from "../../../../lib/axios";


interface CalenderProps {
  days: Date[];
  today: Date;
}

interface AulaProps {
  id: number,
  professor: TeacherProps,
  ambiente: PlaceProps,
  cargaDiaria: number,
  data: string,
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
    const response = await API.get("aula")
    setAulas(response.data)
  }

  useEffect(() => {
    fetchAulas();
  }, [])

  function classOfTheDay(theDay: string) {
    const aulaPorDia = aulas.map(aula => {
      if (aula.data == theDay) {
        return aula
      }
    })
    return aulaPorDia
  }

  let aulasPorPeriodo



  console.log(format(new Date(days[1]), 'dd/MM/yyyy').toString())

  // const data = format(new Date(days[3]), 'dd/MM/yyyy')
  // console.log(data)
  // console.log(aulas[1]?.data)
  // console.log(aulas[1]?.data == data.toString())
  return (
    <HomeCalenderContainer>
      <HomeCalenderHeader>
        <HomeCalenderOrderBy>
          <p>Crescente</p>
        </HomeCalenderOrderBy>
        <HomeCalenderHeaderDays>
          {days.map((day) => {
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
                    aulas.map((aula, index) => {
                      {
                        aulasPorPeriodo = classOfTheDay(aula.data).reduce((acc, aula) => {
                          if (aula?.periodo == "MANHA") {
                            acc.manha = {
                              professor : aula.professor.nome
                            }
                          }
                          return acc
                        }, {
                          manha: {
                            professor: ""
                          }
                        })}
                      return (
                        

                        <HomeClasses>

                       
                          {
                            aula.periodo === 'MANHA' ?
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <HomeClass period="morning">
                                    <p>{aulasPorPeriodo.manha.professor}</p>
                                    <sup>Photoshop</sup>
                                  </HomeClass>

                                </ContextMenu.Trigger>
                                <RightClick />
                              </ContextMenu.Root>
                              : <div></div>
                          }
                          {
                            aula.periodo === 'TARDE' &&

                            <ContextMenu.Root>
                              <ContextMenu.Trigger>
                                <HomeClass period="afternoon">
                                  <p>Caio</p>
                                  <sup>Photoshop</sup>
                                </HomeClass>

                              </ContextMenu.Trigger>
                              <RightClick />
                            </ContextMenu.Root>
                          }
                          {
                            aula.periodo === 'NOITE' &&

                            <ContextMenu.Root>
                              <ContextMenu.Trigger>
                                <HomeClass period="night">
                                  <p>Caio</p>
                                  <sup>Photoshop</sup>
                                </HomeClass>

                              </ContextMenu.Trigger>
                              <RightClick />
                            </ContextMenu.Root>
                          }
                        </HomeClasses>

                      )

                    })}

                </HomeClassesContainer>
              </HomeCalenderContent>

            </div>
          )
        })
      }


    </HomeCalenderContainer>
  );
}
