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
import { CourseProps, ObjectsContext, PlaceProps, TeacherProps } from "../../../../contexts/ObjectsContext";
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

  console

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
                      

                     
                        return (
                          <HomeClasses>
                            {
                              aula.periodo === 'MANHA' && aula.ambiente.id == place.id ?
                                <ContextMenu.Root>
                                  <ContextMenu.Trigger>
                                    <HomeClass period="morning">
                                      <p>{aula.professor.nome}</p>
                                      <sup>Photoshop</sup>
                                      <p>{ }</p>
                                      <p>{aula.data}</p>
                                    </HomeClass>

                                  </ContextMenu.Trigger>
                                  <RightClick />
                                </ContextMenu.Root>
                                : <div></div>
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
