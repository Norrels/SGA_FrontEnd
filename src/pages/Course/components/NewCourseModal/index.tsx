import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
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
  id: z.number(),
  nome: z.string(),
  tipoCurso: z.string(),
  ativo: z.boolean(),
  unidadeCurricular: z.object({
    id: z.number(),
    nome: z.string(),
    horas: z.number(),
  }).array()
});

export type CourseType = z.infer<typeof coursesInputs>;

interface NewCourseModalProps {
  closeModal: () => void
}

export default function NewCourseModal({ closeModal }: NewCourseModalProps) {
  const { register, handleSubmit, reset, formState: { isSubmitted }, } = useForm<CourseType>();
  const [curricularUnit, setCurricularUnit] = useState(["1"]);
  const { createCourseAPI } = useContext(ObjectsContext)

  useEffect(() => {
    closeModal();
  }, [])

  function handleAddNewCurricarUnit() {
    //Gambiara para arrumar o erro de key - Provisorio
    const number = curricularUnit.length;
    const key = number.toString() + "1";
    setCurricularUnit([...curricularUnit, key]);
  }

  function handleCreateNewCourse(data: CourseType) {
    console.log()
    data.ativo = true;
    createCourseAPI(data);
    reset();
    closeModal();
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
            <input
              type="text"
              placeholder="Digite seu nome"
              required
              {...register("nome")} />
          </NewCourseModalInputs>

          <NewCourseModalInputs>
            <label>Tipo</label>
            <select {...register("tipoCurso")}>
              <option>FIC</option>
              <option value="REGULAR">Regular</option>
            </select>
          </NewCourseModalInputs>

          {curricularUnit.map((unit) => {
            return (
              <NewCourseModalUnidadeCurricularContainer

                key={curricularUnit.indexOf(unit)}>
                <div>
                  <label>Unidade Curricular</label>
                  <select required {...register(`unidadeCurricular.${curricularUnit.indexOf(unit)}.nome`)}>
                    <option value="REGULAR">Selecione uma Unidade Curricular</option>
                    <option>Projetos 160h</option>
                  </select>
                </div>

                <div>
                  <label>Horas</label>
                  <input
                    {...register(`unidadeCurricular.${curricularUnit.indexOf(unit)}.horas`)}
                    type="text"
                    placeholder="Digite as horas"
                    required />
                </div>
              </NewCourseModalUnidadeCurricularContainer>
            );
          })}

          <NewCourseModalButtonAddNewUnidadeCurricula
            onClick={handleAddNewCurricarUnit}
            type="button">
            <Plus size={20} />
            <br />
            <p>Adicionar Unidade Curricular</p>
          </NewCourseModalButtonAddNewUnidadeCurricula>

          <div>
            <NewCouseModalCreateButton type="submit">
              Criar
            </NewCouseModalCreateButton>
          </div>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
