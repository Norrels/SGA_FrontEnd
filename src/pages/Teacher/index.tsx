import { TeacherItem } from "./components/TeacherItem";
import {
  TeacherContainer,
  TeacherContent,
  TeacherTitleContainer,
  TeacherButtonContainer,
  TeacherList,
} from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { AvaliableModal } from "./components/AvaliableModal";
import NewTeacherModal from "./components/NewTeacherModal";
import { useContext, useState } from "react";
import { ObjectsContext, TeacherProps } from "../../Contexts/ObjectsContext";
import { NewVacation } from "./components/NewVacation";
import { API } from "../../lib/axios";

export function Teacher() {
  const { teachers } = useContext(ObjectsContext);
  const [teachersMatch, setTeachersMatch] = useState<TeacherProps[]>([]);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  if(teachers.length > 0 && teachersMatch.length == 0) {
    setTeachersMatch(teachers);
  }

  async function searchTeacher(value: String) {
    if (value == "") {
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
          <p>Selecione um Professor ou crie um novo!</p>
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

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Férias</button>
              </Dialog.Trigger>
              <NewVacation />
            </Dialog.Root>
          </TeacherButtonContainer>
        </TeacherTitleContainer>

        <input type="text" placeholder="Buscar por professor" onChange={(v) => searchTeacher(v.target.value)} />

        <TeacherList>
          {teachersMatch.map((teacher) => {
            if (teacher.ativo) {
              return <TeacherItem key={teacher.id} teacherItem={teacher}/>
            }
          })}
        </TeacherList>
      </TeacherContent>
    </TeacherContainer>
  );
}
