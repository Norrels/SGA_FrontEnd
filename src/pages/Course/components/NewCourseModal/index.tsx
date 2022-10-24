//To DO
//Usar o user Memo para dinumir a redezição desse componente

import * as Dialog from "@radix-ui/react-dialog";
import { Plus, Trash, X } from "phosphor-react";
import { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
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

//Varivel de validação
export const coursesInputs = z.object({
  id: z.number(),
  nome: z
    .string()
    .max(20, { message: "O nome não deve ter mais de 20 caracteres" })
    .min(3, { message: "O nome deve ser maior que 3 caracteres" }),
  tipoCurso: z.string(),
  ativo: z.boolean().optional(),
  unidadeCurricular: z
    .object({
      id: z.number().optional().nullable(),
      nome: z
        .string()
        .max(20, { message: "O nome não deve ter mais de 20 caracteres" })
        .min(3, { message: "O nome deve ser maior que 3 caracteres" }),
      horas: z
        .number({ invalid_type_error: "" })
        .positive({ message: "A hora deve ser maior que 6" })
        .gte(6, { message: "A hora deve ser maior que 6" }),
    })
    .array(),
});

//Transformando a variavel de validação em uma interface
export type CourseType = z.infer<typeof coursesInputs>;

//Método utilizado para fecha a modal após o submit
interface NewCourseModalProps {
  closeModal: () => void;
}

export default function NewCourseModal({ closeModal }: NewCourseModalProps) {
  const {
    //Variavel para pega o valor dos input
    register,
    //Metodo que é acionado ao fazer o submit do forms
    handleSubmit,
    //Metodo para limpar os campos do formulario
    reset,
    control,
    //Variavel utilizada para acessar os erros do formulario
    formState: { errors },
  } = useForm<CourseType>({
    resolver: zodResolver(coursesInputs),
    defaultValues: {
      unidadeCurricular: [{ nome: "", horas: 0 }],
    },
  });

  //Método do context que faz a requisição para API e adiciona o valor no state
  const { createCourseAPI } = useContext(ObjectsContext);

  //Variavel para criar a logica de adicionar uma nova unidade curricular  
  const { fields, append, remove } = useFieldArray({
    name: "unidadeCurricular",
    control,
    rules: {
      required: "O curso deve ter pelo menos uma unidade curricular",
    },
  });

  //Criando o curso e setando a primeira letra em maiusculo
  function handleCreateNewCourse(data: CourseType) {
    data.nome =
      data.nome.charAt(0).toUpperCase() + data.nome.slice(1).toLowerCase();
    data.unidadeCurricular = data.unidadeCurricular.map((unidade) => {
      unidade.nome =
        unidade.nome.charAt(0).toUpperCase() +
        unidade.nome.slice(1).toLowerCase();
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
          <input type="hidden" value={0} {...register("id", {valueAsNumber: true})} />
          <NewCourseModalInputs>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              required
              {...register("nome", { required: true })}
            />
            {errors.nome && <p>{errors.nome.message}</p>}
          </NewCourseModalInputs>

          <NewCourseModalInputs>
            <label>Tipo</label>
            <select {...register("tipoCurso", { required: true })}>
              <option>FIC</option>
              <option value="REGULAR">Regular</option>
            </select>
          </NewCourseModalInputs>

          {fields.map((field, index) => {
            return (
              <NewCourseModalUnidadeCurricularContainer key={index}>
                <div>
                  <label>Unidade Curricular</label>
                  <input
                    required
                    {...register(`unidadeCurricular.${index}.nome`, {
                      required: true,
                    })}
                  ></input>
                </div>

                <div>
                  <label>Horas</label>
                  <input
                    {...register(`unidadeCurricular.${index}.horas`, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    type="number"
                    placeholder="Digite as horas"
                    required
                  />
                </div>

                {errors.unidadeCurricular && (
                  <>
                    <p>{errors.unidadeCurricular[index]?.nome?.message}</p>
                    <p>{errors.unidadeCurricular[index]?.horas?.message}</p>
                  </>
                )}

                {
                  index !== 0 && <Trash onClick={() => remove(index)}></Trash>
                }
              </NewCourseModalUnidadeCurricularContainer>
            );
          })}
          <NewCourseModalButtonAddNewUnidadeCurricula
            onClick={() => {
              append({
                nome: "",
                horas: 6,
              });
            }}
            type="button"
          >
            <Plus size={20} />
            <p>Adicionar Unidade Curricular</p>
          </NewCourseModalButtonAddNewUnidadeCurricula>
          <div>
            <NewCouseModalCreateButton
              type="submit"
            >
              Criar
            </NewCouseModalCreateButton>
          </div>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
