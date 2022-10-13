import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CourseProps, ObjectsContext } from "../../../../Contexts/ObjectsContext";
import {
  CloseButton,
  ContainerButtonCreate,
  ContainerInputStar,
  Content,
  ContentSelect,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentScroll,
  NoteButton,
  Overlay,
} from "./style";

interface EditCourseModalProps {
  course: CourseProps;
  closeModal: () => void
}

export const courseInput = z.object({
  id: z.number(),
  nome: z.string(),
  tipoCurso: z.string(),
  ativo: z.boolean()
});

export type CourseType = z.infer<typeof courseInput>;

export function EditCourseModal({ course, closeModal }: EditCourseModalProps) {
  const [disabled, setDisabled] = useState(true);
  const { register, reset, handleSubmit } = useForm<CourseType>();
  const { updateCourses } = useContext(ObjectsContext)

  async function handleUpdateCourse(data: CourseType) {
    //Colocar isso com input hiden no modal
    data.id = course.id
    data.ativo = true
    updateCourses(data)
    reset()
    closeModal()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        {disabled ? (
          <>
            <NoteButton>
              <NotePencil onClick={() => setDisabled(false)} size={32} />
            </NoteButton>
          </>
        ) : (
          <></>
        )}
        <CloseButton>
          <X onClick={() => setDisabled(true)} />
        </CloseButton>

        <Dialog.Title>Editar curso</Dialog.Title>
        <form onSubmit={handleSubmit(handleUpdateCourse)}>
          <InputContainer>
            <InputContent>
              {disabled ? (
                <>
                  <label>Nome</label>
                  <input
                    type="text"
                    defaultValue={course.nome}
                    placeholder="Digite o nome do curso"
                    disabled
                  />
                </>
              ) : (
                <>
                  <label>Nome</label>
                  <input
                    type="text"
                    {...register("nome")}
                    defaultValue={course.nome}
                    placeholder="Digite o nome do curso"
                  />
                </>
              )}
            </InputContent>

            <InputContent>
              {disabled ? (
                <>
                  <label>Tipo</label>
                  <select placeholder="Selecione o Tipo do Curso" disabled>
                    <option
                      value={course.tipoCurso != "" ? course.tipoCurso : ""}
                    >
                      {course.tipoCurso != ""
                        ? course.tipoCurso
                        : "Selecione uma Opção"}
                    </option>
                    <option value="REGULAR">Regular</option>
                    <option value="FIC">FIC</option>
                  </select>
                </>
              ) : (
                <>
                  <label>Tipo</label>
                  <select
                    placeholder="Selecione o Tipo de Curso"
                    {...register("tipoCurso")}
                  >
                    <option
                      value={course.tipoCurso != "" ? course.tipoCurso : ""}
                    >
                      {course.tipoCurso != ""
                        ? course.tipoCurso
                        : "Selecione uma Opção"}
                    </option>
                    <option value="REGULAR">Regular</option>
                    <option value="FIC">FIC</option>
                   
                  </select>
                </>
              )}
              <InputContentScroll>
                {/* {disabled
                ? unidadeCurricular?.map((value) => (
                    <>
                      <ContainerInputStar>
                        <ContentSelect>
                          <label>Unidade Curricular</label>
                          <select disabled>
                            <option>{value.UnidadeCurricular}</option>
                          </select>
                        </ContentSelect>
                        <div>
                          <label>Horas</label>
                          <input
                            disabled
                            type="text"
                            placeholder="Digite as horas"
                            value={value.Horas}
                          />
                        </div>
                      </ContainerInputStar>
                    </>
                  ))
                : unidadeCurricular?.map((value) => (
                    <>
                      <ContainerInputStar>
                        <ContentSelect>
                          <label>Unidade Curricular</label>
                          <select>
                            <option>{value.UnidadeCurricular}</option>
                          </select>
                        </ContentSelect>
                        <div>
                          <label>Horas</label>
                          <input
                            type="text"
                            placeholder="Digite as horas"
                            defaultValue={value.Horas}
                          />
                        </div>
                      </ContainerInputStar>
                    </>
                  ))} */}
              </InputContentScroll>
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
