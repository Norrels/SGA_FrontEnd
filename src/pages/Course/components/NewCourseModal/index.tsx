import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CouseProps } from "../..";
import {
  CloseButton,
  Content,
  Overlay,
  InputContainer,
  InputContent,
  ContainerButtonCreate,
  ContainerNewCompt,
  InputContentScroll,
  NewCompt,
  ContainerInputStar,
  ContentSelect,
  ContentSelectHours,
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
  addNewCourse: (data : CourseType) => void
}

export default function NewCourseModal({ addNewCourse} : NewCouserModalProps) {
  const { register, handleSubmit, control, reset } = useForm<CourseType>();
 
  function handleCreateNewCourse(data: CourseType) {
    addNewCourse(data)
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
          <InputContainer >
            <InputContent>
              <label>Nome</label>
              <input type="text" placeholder="digite seu nome" required {...register("nome")}/>
            </InputContent>

            <InputContent>
              <label>Tipo</label>
              <select {...register("tipo")}>
                <option>FIC</option>
                <option>Regular</option>
              </select>
            </InputContent>

            <InputContentScroll>

              <ContainerInputStar>
                <ContentSelect>
                  <label>Unidade Curricular</label>
                  <select {...register("unidadeCurricular.nome")} required>
                    <option>Selecione uma Unidade Curricular</option>
                    <option>Projetos 160h</option>
                  </select>
                </ContentSelect>
                <ContentSelectHours>
                  <label>Horas</label>
                  <input type="text" placeholder="Digite as horas" required {...register("unidadeCurricular.horas")} />
                </ContentSelectHours>
              </ContainerInputStar>
            </InputContentScroll>
            <ContainerNewCompt>
              <NewCompt>
                <div>
                  <Plus size={32} />
                  <br />
                  <span>Adicionar Unidade Curricular</span>
                </div>
              </NewCompt>
            </ContainerNewCompt>
          </InputContainer>
          <ContainerButtonCreate>
            <button type="submit">Criar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
