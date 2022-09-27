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
import { useEffect, useState } from "react";
import { API } from "../../lib/axios";

export interface Teacher {
  id: number;
  nome: string;
  cargaSemanal: string;
  ativo: boolean;
  competencia: [
    {
      id: number;
      unidadeCurricular: string;
      nivelHabilidade: string;
      nivel: number;
    }
  ];
}[]

export function Teacher() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  async function fetchTeachers() {
    const res = await API.get("professor");
    setTeachers(res.data);
  }

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <TeacherContainer>
      <TeacherContent>
        <TeacherTitleContainer>
          <h1>Professores</h1>
          <p>Selecione um Professor ou crie um novo!</p>

          <TeacherButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo professor</button>
              </Dialog.Trigger>

              <NewTeacherModal />
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Disponibilidade</button>
              </Dialog.Trigger>
              <AvaliableModal />
            </Dialog.Root>
          </TeacherButtonContainer>
        </TeacherTitleContainer>

        <input type="text" placeholder="Buscar por professor" />

        <TeacherList>
          {teachers.map((teacher) => (
            <TeacherItem key={teacher.id} teacherItem={teacher} />
          ))}
        </TeacherList>
      </TeacherContent>
    </TeacherContainer>
  );
}
