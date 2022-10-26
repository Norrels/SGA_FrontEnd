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
  ButtonNewUnidadeCurricular,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";
import { coursesInputs } from "../NewCourseModal";

interface EditCourseModalProps {
  course: CourseProps;
  closeModal: () => void;
}

export type CourseType = z.infer<typeof coursesInputs>;

export function EditCourseModal({ course, closeModal }: EditCourseModalProps) {
  const [editable, setEditable] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CourseType>({
    resolver: zodResolver(coursesInputs),
    defaultValues: {
      unidadeCurricular: course.unidadeCurricular,
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
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>{!editable ? "Curso" : "Editar curso"}</Dialog.Title>
          <HeaderButtons>
            {!editable ? (
              <button onClick={() => setEditable(true)}>
                <NotePencil size={50} weight="light" />
              </button>
            ) : (
              <></>
            )}
            <Dialog.Close>
              <X size={50} weight="light" onClick={() => reset()} />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>

        <form onSubmit={handleSubmit(handleUpdateCourse)}>
          <input
            type="hidden"
            value={0}
            {...register("id", { valueAsNumber: true })}
          />
          <InputScroll>
            <InputContainer>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  required
                  defaultValue={course.nome}
                  {...register("nome", { required: true })}
                  readOnly={!editable}
                />
                {errors.nome && <p>{errors.nome.message}</p>}
              </InputContent>
              <InputContent>
                <label>Tipo</label>
                <select
                  defaultValue={course.tipoCurso}
                  {...register("tipoCurso", { required: true })}
                >
                  <option value="" selected disabled>
                    Selecione o tipo do ambiente
                  </option>
                  <option value="FIC">FIC</option>
                  <option value="REGULAR">Regular</option>
                </select>
                {errors.tipoCurso && <p>* Selecione um valor válido...</p>}
              </InputContent>
              {fields.map((field, index) => {
                return (
                  <InputContent key={index}>
                    <InputIndividual>
                      <label>Unidade Curricular</label>
                      <input
                        type="text"
                        placeholder="Digite a unidade curricular"
                        required
                        {...register(`unidadeCurricular.${index}.id`, {
                          value:
                            course.unidadeCurricular[index]?.id == undefined
                              ? null
                              : course.unidadeCurricular[index].id,
                        })}
                        readOnly={!editable}
                      />
                      {errors.unidadeCurricular && (
                        <p>{errors.unidadeCurricular[index]?.nome?.message}</p>
                      )}
                    </InputIndividual>
                    <InputIndividual>
                      <label>Horas</label>
                      <input
                        type="number"
                        placeholder="Digite as horas"
                        required
                        {...register(`unidadeCurricular.${index}.horas`, {
                          valueAsNumber: true,
                          required: true,
                        })}
                        readOnly={!editable}
                      />
                      {errors.unidadeCurricular && (
                        <p>{errors.unidadeCurricular[index]?.horas?.message}</p>
                      )}
                    </InputIndividual>
                    {index !== 0 ? (
                      <Trash
                        size={40}
                        weight="light"
                        onClick={() => remove(index)}
                      />
                    ) : (
                      <></>
                    )}
                  </InputContent>
                );
              })}
              <ButtonNewUnidadeCurricular
                onClick={() => {
                  append({
                    nome: "",
                    horas: 6,
                  });
                }}
                type="button"
              >
                <Plus size={32} />
                <p>Adicionar unidade curricular</p>
              </ButtonNewUnidadeCurricular>
              <FinalButton>
                <button>Criar</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
      {/* <Dialog.Portal>
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
    </Dialog.Portal> */}
    </Dialog.Portal>
  );
}
