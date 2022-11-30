import { TeacherItem } from "./components/TeacherItem";
import {
  TeacherContainer,
  TeacherContent,
  TeacherTitleContainer,
  TeacherButtonContainer,
  TeacherList,
  Toggle,
} from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { AvaliableModal } from "./components/AvaliableModal";
import NewTeacherModal from "./components/NewTeacherModal";
import { useContext, useEffect, useState } from "react";
import { ObjectsContext, TeacherProps } from "../../contexts/ObjectsContext";
import { NewVacation } from "./components/NewVacation";
import { API } from "../../lib/axios";
import { AuthContext } from "../../contexts/AuthContext";

export function Teacher() {
  document.title = "Professores | SGA";

  const { teachers } = useContext(ObjectsContext);
  const [teachersMatch, setTeachersMatch] = useState<TeacherProps[]>([]);
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState<Boolean>(false);

  const [open1, setOpen1] = useState(false);
  const [on1, setOn1] = useState<Boolean>(false);
  const { userToEdit } = useContext(AuthContext)

  function closeModal() {
    setOpen(false);
  }

  function closeModal1() {
    setOpen1(false);
  }

  useEffect(() => {
    handleGetTeachers();
  }, [teachersMatch]);

  async function handleGetTeachers() {
    const resp = await API.get("/professor");

    if (resp.status == 200) {
      setTeachersMatch(resp.data);
    }
  }

  async function handleChangeList(value: Boolean) {
    setOn(value);
    setOn1(value);
    if (value) {
      setTeachersMatch(teachers.filter((e) => e.ativo == false));
    } else {
      setTeachersMatch(teachers.filter((e) => e.ativo == true));
    }
  }

  async function searchTeacher(value: String) {
    if (!value) {
      setTeachersMatch(teachers);
    } else {
      const res = await API.get(`/professor/buscapalavra/${value}`);
      setTeachersMatch(res.data);
    }
  }

  return (
    <TeacherContainer>
      <TeacherContent>
        <TeacherTitleContainer>
          <h1>Professores</h1>
          <p>Selecione um professor ou crie um novo!</p>
          <TeacherButtonContainer>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button>Novo professor</button>
              </Dialog.Trigger>
              <NewTeacherModal closeModal={closeModal} />
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Disponibilidade</button>
              </Dialog.Trigger>
              <AvaliableModal />
            </Dialog.Root>

            <Dialog.Root open={open1} onOpenChange={setOpen1}>
              <Dialog.Trigger asChild>
                <button>Férias</button>
              </Dialog.Trigger>
              <NewVacation closeModal1={closeModal1} />
            </Dialog.Root>
          </TeacherButtonContainer>
        </TeacherTitleContainer>

        <input
          type="text"
          placeholder="Busque um ou vários professores..."
          onChange={(v) => searchTeacher(v.target.value)}
        />
       {userToEdit.tipoUsuario == "SUPORTE" &&
          <Toggle>
            <label>Desativados</label>
            <input
              onChange={(e) => handleChangeList(e.target.checked)}
              type="checkbox"
            />
          </Toggle>
        }
        <TeacherList>
          {teachersMatch.map((teacher) => {
            if (teacher.ativo && on == false) {
              return <TeacherItem key={teacher.id} teacherItem={teacher} />;
            } else if (teacher.ativo == false && on == true) {
              return <TeacherItem key={teacher.id} teacherItem={teacher} />;
            }
          })}
        </TeacherList>
      </TeacherContent>
    </TeacherContainer>
  );
}
