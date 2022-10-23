import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  id: z.number().optional(),
  nome: z
    .string()
    .max(20, { message: "O nome não deve ter mais de 20 caracteres" })
    .min(3, { message: "O nome deve ser maior que 3 caracteres" }),
  tipoCurso: z.string(),
  ativo: z.boolean().optional(),
  unidadeCurricular: z
    .object({
      id: z.number().optional(),
      nome: z
        .string()
        .max(20, { message: "O nome não deve ter mais de 20 caracteres" })
        .min(3, { message: "O nome deve ser maior que 3 caracteres" }),
      horas: z
        .number()
        .positive()
        .gte(6, { message: "A hora deve ser maior que 6" }),
    })
    .array(),
});

export type CourseType = z.infer<typeof coursesInputs>;

interface NewCourseModalProps {
  closeModal: () => void;
}

export default function NewCourseModal({ closeModal }: NewCourseModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CourseType>({
    resolver: zodResolver(coursesInputs),
  });
  const [curricularUnit, setCurricularUnit] = useState(["1"]);
  const { createCourseAPI } = useContext(ObjectsContext);

  function handleAddNewCurricarUnit() {
    //Gambiara para arrumar o erro de key - Provisorio
    const number = curricularUnit.length;
    const key = number.toString() + "1";
    setCurricularUnit([...curricularUnit, key]);
  }

  function handleCreateNewCourse(data: CourseType) {
    console.log(data);
    data.nome =
      data.nome.charAt(0).toUpperCase() + data.nome.slice(1).toLowerCase();
      data.unidadeCurricular = data.unidadeCurricular.map((unidade, index) => {
      unidade.nome =
        unidade.nome.charAt(0).toUpperCase() + unidade.nome.slice(1).toLowerCase();
      return unidade;
    });
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
              {...register("nome")}
            />
            {errors.nome && <p>{errors.nome.message}</p>}
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
                key={curricularUnit.indexOf(unit)}
              >
                <div>
                  <label>Unidade Curricular</label>
                  <input
                    required
                    {...register(
                      `unidadeCurricular.${curricularUnit.indexOf(unit)}.nome`
                    )}
                  ></input>
                </div>

                <div>
                  <label>Horas</label>
                  <input
                    {...register(
                      `unidadeCurricular.${curricularUnit.indexOf(unit)}.horas`,
                      { valueAsNumber: true }
                    )}
                    type="number"
                    placeholder="Digite as horas"
                    required
                  />
                </div>

                {errors.unidadeCurricular && (
                  <p>{errors.unidadeCurricular.message}</p>
                )}
              </NewCourseModalUnidadeCurricularContainer>
            );
          })}

          <NewCourseModalButtonAddNewUnidadeCurricula
            onClick={handleAddNewCurricarUnit}
            type="button"
          >
            <Plus size={20} />
            <br />
            <p>Adicionar Unidade Curricular</p>
          </NewCourseModalButtonAddNewUnidadeCurricula>

          <div>
            <NewCouseModalCreateButton
              type="submit"
              onClick={() => console.log(errors)}
            >
              Criar
            </NewCouseModalCreateButton>
          </div>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
