import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Plus, Star, Upload, X } from "phosphor-react";
import React, { useContext, useState } from "react";
import { z } from "zod";
import { Rating } from "./components/Rating";
import { useForm } from "react-hook-form";
import {
  ButtonNewCompetencia,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputFile,
  InputFileContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  NivelStars,
  Overlay,
} from "./style";
import {
  ObjectsContext,
  TeacherProps,
} from "../../../../Contexts/ObjectsContext";

export interface IInput {
  id?: number;
  nome?: string;
  horas?: number;
  unidade?: string;
}

export const teacherInput = z.object({
  id: z.number(),
  nome: z
    .string()
    .min(3, { message: "O nome não deve ser menor que 3 carecteres" }),
  cargaSemanal: z.number(),
  foto: z.string(),
  ativo: z.boolean(),
  email: z.string(),
  competencia: z
    .object({
      id: z.number(),
      professor: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      unidadeCurricular: z.object({
        id: z.number(),
        nome: z.string(),
        horas: z.string(),
      }),
      nivel: z.number(),
    })
    .array(),
});

export type TeacherType = z.infer<typeof teacherInput>;

interface EdiTeacherModalProps {
  teacherItem: TeacherProps;
}

export function EditTeacherModal({ teacherItem }: EdiTeacherModalProps) {
  const [editable, setEditable] = useState(false);
  const { register, reset, handleSubmit } = useForm<TeacherType>();
  const { updateTeaches } = useContext(ObjectsContext);

  async function handleUpdateTeacher(data: TeacherType) {
    //Coloca um input hiden no form
    data.id = teacherItem.id;
    /* updateTeaches(data); */
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>
            {!editable ? "Professor" : "Editar professor"}
          </Dialog.Title>
          <HeaderButtons>
            {!editable ? (
              <button onClick={() => setEditable(true)}>
                <NotePencil size={50} weight="light" />
              </button>
            ) : (
              <></>
            )}
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form>
          <InputScroll>
            <InputContainer>
              <InputContent disabled={"on"}>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome do professor"
                  required
                  defaultValue={teacherItem.nome}
                  {...register("nome")}
                  readOnly={!editable}
                />
                {/* {errors.nome && <p>{errors.nome.message}</p>} */}
              </InputContent>
              <InputContent disabled={"on"}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Digite o email do professor"
                  required
                  defaultValue={teacherItem.email}
                  {...register("email")}
                  readOnly={!editable}
                />
                {/* {errors.email && <p>{errors.email.message}</p>} */}
              </InputContent>
              <InputContent disabled={"on"}>
                <InputIndividual>
                  <label>Carga horária semanal</label>
                  <input
                    type="number"
                    placeholder="Digite as horas"
                    required
                    defaultValue={teacherItem.cargaSemanal}
                    {...register("cargaSemanal")}
                    readOnly={!editable}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Foto</label>
                  <InputFile disabled={!editable ? "disabled" : "on"}>
                    <InputFileContent
                      style={
                        !editable
                          ? { backgroundColor: "#efefef" }
                          : { backgroundColor: "transparent" }
                      }
                    >
                      <span
                        style={
                          !editable
                            ? { color: "rgba(109, 109, 109, 0.5)" }
                            : { color: "#6D6D6D" }
                        }
                      >
                        {teacherItem.foto}
                      </span>
                      <div
                        style={
                          !editable ? { opacity: "30%" } : { opacity: "100%" }
                        }
                      >
                        <Upload size={40} weight="light" />
                      </div>
                    </InputFileContent>
                    <input
                      type="file"
                      id="file"
                      multiple={false}
                      accept="image/*"
                      /* onChange={uploadImage} */
                      // required
                      // {...register("foto")}
                    />
                  </InputFile>
                </InputIndividual>
              </InputContent>
              <InputContent disabled={!editable ? "disabled" : "on"}>
                <InputIndividual>
                  <label>Competência</label>
                  <select>
                    <option value="" selected disabled>
                      Selecione uma unidade curricular
                    </option>
                    {/* {unidadeCurricular.map((value) => (
                      <option key={value.id} value={value.nome}>
                        {value.nome}
                      </option>
                    ))} */}
                  </select>
                </InputIndividual>
                <InputIndividual>
                  <header>
                    <label>Nível</label>
                    {/* quando fizer a logica descomentar codigo abaixo :D */}
                    {/* {index !== 0 ? <Trash size={24} /> : <></>} */}
                  </header>
                  <NivelStars
                    style={!editable ? { opacity: "30%" } : { opacity: "100%" }}
                  >
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                  </NivelStars>
                </InputIndividual>
              </InputContent>
              {editable ? (
                <ButtonNewCompetencia onClick={() => {}} type="button">
                  <Plus size={32} />
                  <p>Adicionar competência</p>
                </ButtonNewCompetencia>
              ) : (
                <></>
              )}

              {editable ? (
                <FinalButton>
                  <button>Salvar</button>
                </FinalButton>
              ) : (
                <></>
              )}
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
      {/* DEIXEI AQUI PRA QUANDO FOR FAZER A VALIDACAO, CODIGO ANTIGO ABAIXO vvvvvvv */}
      {/* <Dialog.Portal>
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
          <X onClick={() => setDisabled(true)} size={24} />
        </CloseButton>

        <Dialog.Title>
          {disabled ? "Professor" : "Editar Professor"}
        </Dialog.Title>

        <form onSubmit={handleSubmit(handleUpdateTeacher)}>
          <InputContainer>
            <InputContent>
              <label>Nome</label>
              <input
                defaultValue={teacherItem.nome}
                type="text"
                placeholder="digite o nome do professor"
                {...register("nome")}
               
              />
            </InputContent>
            <InputContentDupo>
              <div>
                <label>Carga horária Semanal</label>
                <input
                 defaultValue={teacherItem.cargaSemanal}
                  type="text"
                  placeholder="digite as horas"
                  {...register("cargaSemanal")}
                
                />
              </div>
              <div>
                <label>Foto</label>
                <input
                 
                  defaultValue={teacherItem.foto}
                  type="file"
                  id="file"
                  accept="image/*"
                  placeholder="envie uma foto do professor"
                />
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Email</label>
              <input
                defaultValue={teacherItem.email}
                type="text"
                placeholder="digite o nome do professor"
                {...register("email")}
                readOnly={disabled}
              />
            </InputContent>

            <InputContentScroll>
               {disabled
              ? listaCompetencia?.map((v) => (
                  <>
                    <ContainerInputStar key={v.id}>
                      <ContentSelect>
                        <label>Competência</label>
                        <select disabled>
                          <option>{v.unidadeCurricular?.nome}</option>
                          <option>Java</option>
                        </select>
                      </ContentSelect>
                      <Rating
                        edit_={false}
                        nivelHabilidade={Number(v.nivelHabilidade)}
                      />
                    </ContainerInputStar>
                  </>
                ))
              : listaCompetencia?.map((v) => (
                  <>
                    <>
                      <ContainerInputStar key={v.id}>
                        <ContentSelect>
                          <label>Competência</label>
                          <select>
                            <option>{v.unidadeCurricular?.nome}</option>
                            <option>Java</option>
                          </select>
                        </ContentSelect>
                        <Rating
                          edit_={true}
                          nivelHabilidade={Number(v.nivelHabilidade)}
                        />
                      </ContainerInputStar>
                    </>
                    <>
                      {input.map((v) => (
                        <ContainerInputStar>
                          <ContentSelect>
                            <label>{v.nome}</label>
                            <select>
                              <option>{v.unidade}</option>
                              <option>Java</option>
                            </select>
                          </ContentSelect>
                          <Rating edit_={true} nivelHabilidade={0} />
                        </ContainerInputStar>
                      ))}
                    </>
                  </>
                ))} 
            </InputContentScroll>
             {disabled ? (
            <></>
          ) : (
            <ContainerNewCompt
              onClick={(e) => {
                setInput([
                  ...input,
                  {
                    id: 0,
                    nome: "Competência",
                    unidade: "Selecione uma unidade curricular",
                    horas: 0,
                  },
                ]);
              }}
            >
              <NewCompt>
                <div>
                  <Plus size={32} />
                  <br />
                  <span>Adicionar Competência</span>
                </div>
              </NewCompt>
            </ContainerNewCompt>
          )} 
          </InputContainer>
          {disabled ? (
            <></>
          ) : (
            <ContainerButtonCreate>
              <button>Editar</button>
            </ContainerButtonCreate>
          )}
        </form>
      </Content>
    </Dialog.Portal> */}
    </Dialog.Portal>
  );
}
