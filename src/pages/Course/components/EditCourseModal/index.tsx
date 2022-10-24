import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Plus, Trash, X } from "phosphor-react";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  CourseProps,
  ObjectsContext,
} from "../../../../Contexts/ObjectsContext";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentScroll,
  NewCourseModalButtonAddNewUnidadeCurricular,
  NoteButton,
  Overlay,
} from "./style";
import { coursesInputs } from "../NewCourseModal";

interface EditCourseModalProps {
  course: CourseProps;
  closeModal: () => void;
}

export type CourseType = z.infer<typeof coursesInputs>;

export function EditCourseModal({ course, closeModal }: EditCourseModalProps) {
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CourseType>({
    resolver: zodResolver(coursesInputs),
    defaultValues: {
      unidadeCurricular: course.unidadeCurricular
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "unidadeCurricular",
    control,
    rules: {
      required: "O curso deve ter pelo menos uma unidade curricular",
    },
  });

  const { updateCourses } = useContext(ObjectsContext);

  async function handleUpdateCourse(data: CourseType) {
    data.ativo = true;
    updateCourses(data);
    closeModal();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setDisabled(true)}>
        <NoteButton onClick={() => setDisabled(false)}>
          <NotePencil size={32} />
        </NoteButton>
        <CloseButton>
          <X onClick={() => reset()} />
        </CloseButton>
        <Dialog.Title>Editar curso</Dialog.Title>

        <form onSubmit={handleSubmit(handleUpdateCourse)}>
          <input
            type="hidden"
            value={course.id}
            {...register("id", { valueAsNumber: true })}
          />
          <InputContainer>
            <InputContent disabled={disabled ? "disabled" : "on"}>
              <label>Nome</label>
              <input
                type="text"
                defaultValue={course.nome}
                placeholder="Digite o nome do curso"
                {...register("nome")}
              />
              {errors.nome && <p>{errors.nome.message}</p>}
            </InputContent>

            <InputContent disabled={disabled ? "disabled" : "on"}>
              <label>Tipo</label>
              <select
                placeholder="Selecione o Tipo do Curso"
                defaultValue={course.tipoCurso}
                {...register("tipoCurso")}
              >
                <option value="REGULAR">Regular</option>
                <option value="FIC">FIC</option>
              </select>

              {fields.map((field, index) => {
                return (
                  <InputContentScroll key={index}>
                    <div>
                    <Trash onClick={() => remove(index)}></Trash>
                    {index !== 0 && (
                      <Trash onClick={() => remove(index)}></Trash>
                    )}
                      <input
                        type="hidden"
                        {...register(`unidadeCurricular.${index}.id`, {
                          value: course.unidadeCurricular[index]?.id == undefined ? null : course.unidadeCurricular[index].id,
                        })}
                      />
                      <label onClick={() => console.log(course.unidadeCurricular[index]?.id)}>Unidade Curricular</label>
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

                   
                  </InputContentScroll>
                );
              })}

              <NewCourseModalButtonAddNewUnidadeCurricular
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
              </NewCourseModalButtonAddNewUnidadeCurricular>
            </InputContent>
            <ContainerButtonCreate>
              <button>Editar</button>
            </ContainerButtonCreate>
          </InputContainer>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
