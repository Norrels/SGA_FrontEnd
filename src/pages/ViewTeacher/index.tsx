import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Star } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { boolean } from "zod";
import VisualzacaoProfessores from "../../assets/VisualizacaoProfessores.svg";
import { ObjectsContext, TeacherProps } from "../../contexts/ObjectsContext";
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

export interface AbsenceProps {
  id: number | undefined;
  dataInicio: string;
  dataFinal: string;
  tipo: string;
  professor: {
    id: number | undefined;
  };
}

export function ViewTeacher() {
  const { teacherId } = useParams();
  const [inClass, setInClass] = useState<Boolean>();
  const [teacher, setTeacher] = useState<TeacherProps>({
    id: 0,
    ativo: true,
    cargaSemanal: 1,
    nome: "",
    email: "",
    competencia: [],
  });
  const [closeModal, setCloseModal] = useState(false)
  const [absenseList, setAbsenseList] = useState<AbsenceProps[]>([]);
  const { updateTeachers } = useContext(ObjectsContext)

  async function fetchUser() {
    const response = await API.get(`/professor/${teacherId}`);
    setTeacher(response.data[0]);
    setAbsenseList(response.data[1]);
    response.data[2] ? setInClass(true) : setInClass(false)
  }

  useEffect(() => {
    fetchUser();
  }, []);

  async function teacherUpdate(data: TeacherProps) {
   updateTeachers(data)
   setTeacher(data)
   setCloseModal(false)
  }

  function handlecloseModal(){
    setCloseModal(false)
  }

  function removeFoto() {
    const teacherToUpdate : TeacherProps = {
      cargaSemanal: teacher.cargaSemanal,
      competencia: teacher.competencia,
      email: teacher.email,
      nome: teacher.nome,
      ativo: teacher.ativo,
      foto: undefined,
      id: teacher.id
    }
    setTeacher(teacherToUpdate)
  }


  document.title = `${teacher?.nome} | SGA`;
  return (
    <Main>
      <TeacherMain>
        <img src={VisualzacaoProfessores} />
        <TeacherMainProfile>
          <Dialog.Root open={closeModal} onOpenChange={setCloseModal}>
            <Dialog.Trigger
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
              }}
            >
              <NotePencil size={32} opacity={0.5} />
            </Dialog.Trigger>

            <EditTeacherModal closeModal={handlecloseModal} removeFoto={removeFoto} teacherUpdate={teacherUpdate} teacherItem={teacher} />
          </Dialog.Root>
          <TeacherProfileContent>
            <TeacherProfileLeft disponibilidade={inClass ? "emAula" : "livre"}>
              <TeacherProfileLeftPhoto>
                <span>{inClass ? "Em aula" : "Livre"}</span>
                <img src={teacher.foto} />
              </TeacherProfileLeftPhoto>
              <p>{teacher?.nome}</p>
            </TeacherProfileLeft>
            <TeacherProfileSeparator></TeacherProfileSeparator>
            <TeacherProfileSkills>
              <h3>Competências:</h3>
              {teacher.competencia?.map((competencia) => {
                return (
                  <TeacherSkillsIndividual key={competencia.nivel}>
                    <p>{competencia.unidadeCurricular.nome}</p>
                    <TeacherIndividualStars>
                      <Star
                        size={35}
                        weight="fill"
                        color={competencia.nivel > 1 ? " #25B5E9" : "#E8E8E8"}
                      />
                      <Star
                        size={35}
                        weight="fill"
                        color={competencia.nivel > 2 ? " #25B5E9" : "#E8E8E8"}
                      />
                      <Star
                        size={35}
                        weight="fill"
                        color={competencia.nivel > 3 ? " #25B5E9" : "#E8E8E8"}
                      />
                      <Star
                        size={35}
                        weight="fill"
                        color={competencia.nivel > 4 ? " #25B5E9" : "#E8E8E8"}
                      />
                      <Star
                        size={35}
                        weight="fill"
                        color={competencia.nivel == 5 ? " #25B5E9" : "#E8E8E8"}
                      />
                    </TeacherIndividualStars>
                  </TeacherSkillsIndividual>
                );
              })}
            </TeacherProfileSkills>
          </TeacherProfileContent>
        </TeacherMainProfile>
      </TeacherMain>
      <Absense>
        <AbsenseList>
          {absenseList.map((absense) => {
            console.log(absense)
            return (
              <AbsenseItem key={absense.id} absence={absense} />
            );
          })}
        </AbsenseList>
      </Absense>
    </Main>
  );
}
