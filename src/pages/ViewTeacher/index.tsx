import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Star } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VisualzacaoProfessores from "../../assets/VisualizacaoProfessores.svg";
import { ObjectsContext, Teacher } from "../../Contexts/ObjectsContext";
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

export function ViewTeacher() {
  const [teacher, setTeachers] = useState<Teacher>(
    {
      id: 0,
      ativo: true,
      cargaSemanal: 1,
      nome: "",
      email: "",
      competencia: []
    }
  )
  const { teachers } = useContext(ObjectsContext)
  const { teacherId } = useParams()

  useEffect(() => {
    teachers.filter((teacher) => {
      if(teacher.id.toString() == teacherId) {
        setTeachers(teacher)
      }
    })
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
            <TeacherProfileLeft>
              <TeacherProfileLeftPhoto>
                <span>Em aula</span>
                <img />
              </TeacherProfileLeftPhoto>
              <p>{teacher?.nome}</p>
            </TeacherProfileLeft>
            <TeacherProfileSeparator></TeacherProfileSeparator>
            <TeacherProfileSkills>
              <h3>Competências:</h3>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
              <TeacherSkillsIndividual>
                <p>Java</p>
                <TeacherIndividualStars>
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                  <Star size={35} weight="fill" color="#E8E8E8" />
                </TeacherIndividualStars>
              </TeacherSkillsIndividual>
            </TeacherProfileSkills>
          </TeacherProfileContent>
        </TeacherMainProfile>
      </TeacherMain>
      <Absense>
        <input type="text" placeholder="Buscar ausência..." />

        <AbsenseList>
          <AbsenseItem />
        </AbsenseList>
      </Absense>
    </Main>
  );
}
