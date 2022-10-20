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
  InputContainer,
  InputContent,
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
  ativo: z.boolean(),
  unidadeCurricular: z.object(
    {
      id: z.number(),
      nome: z.string(),
      horas: z.number()
    }
  ).array()
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
        <NoteButton>
          <NotePencil onClick={() => setDisabled(false)} size={32} />
        </NoteButton>
        <CloseButton>
          <X onClick={() => setDisabled(true)} />
        </CloseButton>
        <Dialog.Title>Editar curso</Dialog.Title>
        <form onSubmit={handleSubmit(handleUpdateCourse)}>
          <input type="hidden" value={course.id} {...register("id")} />
          <InputContainer>
            <InputContent>
              <label>Nome</label>
              <input
                type="text"
                defaultValue={course.nome}
                placeholder="Digite o nome do curso"
                disabled={disabled}
              />
            </InputContent>

            <InputContent>
              <label>Tipo</label>
              <select placeholder="Selecione o Tipo do Curso" defaultValue={course.tipoCurso} disabled={disabled} {...register("tipoCurso")}>
                <option value="REGULAR">Regular</option>
                <option value="FIC">FIC</option>
              </select>
              <InputContentScroll>

                {course.unidadeCurricular.map((curso) => {
                  return (
                    <ContainerInputStar key={curso.id}>
                      <div>
                        <label>Unidade Curricular</label>
                        <select defaultValue={curso.nome}>
                          {
                            course.unidadeCurricular.map((curso) => {
                              return (
                                <option key={curso.id}>{curso.nome}</option>
                              );
                            })
                          }
                        </select>
                      </div>

                      <div>
                        <label>Horas</label>
                        <input
                          type="text"
                          placeholder="Digite as horas"
                          defaultValue={curso.horas}

                        />
                      </div>
                    </ContainerInputStar>
                  )
                })}

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
