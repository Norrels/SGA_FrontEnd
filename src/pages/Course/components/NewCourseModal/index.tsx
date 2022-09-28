import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { API } from "../../../../lib/axios";
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
  id: z.string(),
  nome: z.string(),
  tipoCurso: z.string(),
  /* unidadeCurricular: z.object({
    nome: z.string(),
    horas: z.string(),
  }), */
});

export type CourseType = z.infer<typeof coursesInputs>;

interface NewCouserModalProps {
  addNewCourse: (data: CourseType) => void;
}

/* { addNewCourse }: NewCouserModalProps */
export default function NewCourseModal({ addNewCourse }: NewCouserModalProps) {
  const { register, handleSubmit, reset } = useForm<CourseType>();
  const [curricularUnit, setCurricularUnit] = useState(["1"]);

  function handleAddNewCurricarUnit() {
    //Gambiara para arrumar o erro de key - Provisorio
    const number = curricularUnit.length;
    const key = number.toString() + "1";
    setCurricularUnit([...curricularUnit, key]);
  }

  function handleCreateNewCourse(data: CourseType) {
    createCourseAPI(data);
    reset();
  }

  async function createCourseAPI(data: CourseType) {
    const res = await API.post("curso", data);

    if (res.status == 200) {
      addNewCourse(data);
      console.log("passo aqui")
    }
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
                placeholder="digite seu nome"
                required
                {...register("nome")}
              />
            </NewCourseModalInputs>

            <NewCourseModalInputs>
              <label>Tipo</label>

              <select {...register("tipoCurso")}>
                <option>FIC</option>
                <option>Regular</option>
              </select>
            </NewCourseModalInputs>

           {/*  {curricularUnit.map((unit) => {
              return (
                <NewCourseModalUnidadeCurricularContainer
                  key={curricularUnit.indexOf(unit)}
                >
                  <div>
                    <label>Unidade Curricular</label>
                    <select
                      {...register("unidadeCurricular.nome")} required
                    >
                      <option>Selecione uma Unidade Curricular</option>
                      <option>Projetos 160h</option>
                    </select>
                  </div>

                  <div>
                    <label>Horas</label>
                    <input
                      type="text"
                      placeholder="Digite as horas"
                      required
                      {...register("unidadeCurricular.horas")}
                    />
                  </div>
                </NewCourseModalUnidadeCurricularContainer>
              );
            })} */}

            <NewCourseModalButtonAddNewUnidadeCurricula
              onClick={handleAddNewCurricarUnit}
              type="button"
            >
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
