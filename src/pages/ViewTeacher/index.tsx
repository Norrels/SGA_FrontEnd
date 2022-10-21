import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Star } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { date } from "zod";
import VisualzacaoProfessores from "../../assets/VisualizacaoProfessores.svg";
import { ObjectsContext, TeacherProps } from "../../Contexts/ObjectsContext";
import { API } from "../../lib/axios";
import { AbsenseItem } from "./components/AbsenseItem";
import { EditTeacherModal } from "./components/EditTeacherModal";
import {
  Absense,
  AbsenseList,
  Main,
  TeacherIndividualStars,
  TeacherMain,
  TeacherMainProfile,
  TeacherProfileContent,
  TeacherProfileLeft,
  TeacherProfileLeftPhoto,
  TeacherProfileSeparator,
  TeacherProfileSkills,
  TeacherSkillsIndividual,
} from "./style";

export interface AbsenseProps {
  id: number
  dataFinal: Date
  dataInicio: Date
  tipo: string
}

export function ViewTeacher() {
  const { teacherId } = useParams()
  const [inClass, setInClass] = useState<Boolean>()
  const [teacher, setTeachers] = useState<TeacherProps>(
    {
      id: 0,
      ativo: true,
      cargaSemanal: 1,
      nome: "",
      email: "",
      competencia: []
    }
  )

  const [absenseList, setAbsenseList] = useState<AbsenseProps[]>([
    {
      id: 0,
      dataFinal: new Date(),
      dataInicio: new Date(),
      tipo: ""
    }
  ])

  async function fetchUser() {
    const response = await API.get(`/ausencia/professor/${teacherId}`)
    console.log(response.data)
    setTeachers(response.data[0])
    setAbsenseList(response.data[1])
    setInClass(true)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Main>
      <TeacherMain>
        <img src={VisualzacaoProfessores} />
        <TeacherMainProfile>
          <Dialog.Root>
            <Dialog.Trigger
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
              }}
            >
              <NotePencil size={32} opacity={0.5} />
            </Dialog.Trigger>

            <EditTeacherModal teacherItem={teacher} />
          </Dialog.Root>
          <TeacherProfileContent>
            <TeacherProfileLeft disponibilidade={inClass ? "emAula" : "livre"}>
              <TeacherProfileLeftPhoto >
                <span>{inClass ? "Em aula" : "Livre"}</span>
                <img />
              </TeacherProfileLeftPhoto>
              <p>{teacher?.nome}</p>
            </TeacherProfileLeft>
            <TeacherProfileSeparator></TeacherProfileSeparator>
            <TeacherProfileSkills>
              <h3>Competências:</h3>
              {
                teacher.competencia.map((competencia) => {
                  return (
                    <TeacherSkillsIndividual>
                      <p>{competencia.unidadeCurricular.nome}</p>
                      <TeacherIndividualStars>
                        <Star size={35} weight="fill" color={competencia.nivel > 1 ? " #25B5E9" : "#E8E8E8"} />
                        <Star size={35} weight="fill" color={competencia.nivel > 2 ? " #25B5E9" : "#E8E8E8"} />
                        <Star size={35} weight="fill" color={competencia.nivel > 3 ? " #25B5E9" : "#E8E8E8"} />
                        <Star size={35} weight="fill" color={competencia.nivel > 4 ? " #25B5E9" : "#E8E8E8"} />
                        <Star size={35} weight="fill" color={competencia.nivel == 5 ? " #25B5E9" : "#E8E8E8"} />
                      </TeacherIndividualStars>
                    </TeacherSkillsIndividual>
                  )
                })
              }
            </TeacherProfileSkills>
          </TeacherProfileContent>
        </TeacherMainProfile>
      </TeacherMain>
      <Absense>
        <input type="text" placeholder="Buscar ausência..." />

        <AbsenseList>
          {
            absenseList.map((absenseList) => {
              return (
                <AbsenseItem key={absenseList.id} absenceList={absenseList} />
              )
            })
          }

        </AbsenseList>
      </Absense>
    </Main>
  );
}
