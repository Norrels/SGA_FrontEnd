import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CloseButton,
  Content,
  NewCourseModalButtonAddNewUnidadeCurricula,
  NewCourseModalInputs,
  NewCourseModalUnidadeCurricularContainer,
  NewCouseModalCreateButton,
  Overlay,
} from "./style";

export const coursesInputs = z.object({
  nome: z.string(),
  tipo: z.string(),
  unidadeCurricular: z.object({
    nome: z.string(),
    horas: z.string(),
  })
})

export type CourseType = z.infer<typeof coursesInputs>;

interface NewCouserModalProps {
  addNewCourse: (data: CourseType) => void
}

export default function NewCourseModal({ addNewCourse }: NewCouserModalProps) {
  const { register, handleSubmit, reset } = useForm<CourseType>();

  function handleCreateNewCourse(data: CourseType) {
    addNewCourse(data)
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Novo curso</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewCourse)}>
          <NewCourseModalInputs>
            <label>Nome</label>
            <input type="text" placeholder="digite seu nome" required {...register("nome")} />
          </NewCourseModalInputs>

          <NewCourseModalInputs>
            <label>Tipo</label>
            <select {...register("tipo")}>
              <option>FIC</option>
              <option>Regular</option>
            </select>
          </NewCourseModalInputs>

          <NewCourseModalUnidadeCurricularContainer>
            <div>
              <label>Unidade Curricular</label>
              <select {...register("unidadeCurricular.nome")} required>
                <option>Selecione uma Unidade Curricular</option>
                <option>Projetos 160h</option>
              </select>
            </div>

            <div>
              <label>Horas</label>
              <input type="text" placeholder="Digite as horas" required {...register("unidadeCurricular.horas")} />
            </div>
          </NewCourseModalUnidadeCurricularContainer>

          <NewCourseModalButtonAddNewUnidadeCurricula>
              <Plus size={20} />
              <br />
              <p>Adicionar Unidade Curricular</p>
          </NewCourseModalButtonAddNewUnidadeCurricula>

          <div>
            <NewCouseModalCreateButton type="submit">Criar</NewCouseModalCreateButton>
          </div>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
