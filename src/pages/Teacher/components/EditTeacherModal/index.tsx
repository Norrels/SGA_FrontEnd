import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Plus, X } from "phosphor-react";
import React, { useState } from "react";
import { z } from "zod";
import { Teacher } from "../..";
import { Rating } from "./components/Rating";
import { useForm } from "react-hook-form";
import {
  CloseButton,
  ContainerButtonCreate,
  ContainerInputStar,
  ContainerNewCompt,
  Content,
  ContentSelect,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentScroll,
  NewCompt,
  NoteButton,
  Overlay,
} from "./style";
import { API } from "../../../../lib/axios";

export interface IInput {
  id?: number;
  nome?: string;
  horas?: number;
  unidade?: string;
}

export const teacherInput = z.object({
  id: z.number(),
  nome: z.string(),
  cargaSemanal: z.number(),
  ativo: z.boolean(),
  email: z.string(),
  competencia: z
    .object({
      id: z.number(),
      unidadeCurricular: z.string(),
      nivelHabilidade: z.string(),
      nivel: z.number(),
    })
    .array(),
});

export type TeacherType = z.infer<typeof teacherInput>;

interface EdiTeacherModalProps {
  editNewTeacher: (data: TeacherType) => void;
  teacherItem: TeacherType;
}

export function EditTeacherModal({
  teacherItem,
  editNewTeacher,
}: EdiTeacherModalProps) {
  const [input, setInput] = useState<IInput[]>([]);
  const [disabled, setDisabled] = useState(true);
  const { register, reset, handleSubmit } = useForm<TeacherType>();

  function onExit() {
    setInput([]);
    setDisabled(true);
  }

  async function handleUpdateTeacher(data: TeacherType) {
    console.log({
      id: teacherItem.id,
      nome: data.nome,
      email: data.nome + "@gmail.com",
      cargaSemanal: data.cargaSemanal,
    });

    const res = await API.put(`professor/${teacherItem.id}`, {
      id: teacherItem.id,
      nome: data.nome,
      email: data.nome + "@gmail.com",
      cargaSemanal: data.cargaSemanal,
    });

    if (res.status == 200) {
      editNewTeacher(data);
    }
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
          <X onClick={() => onExit()} size={24} />
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
                disabled={disabled}
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
                  disabled={disabled}
                />
              </div>
              <div>
                <label>Foto</label>
                <input
                  disabled={disabled}
                  type="file"
                  id="file"
                  accept="image/*"
                  placeholder="envie uma foto do professor"
                />
              </div>
            </InputContentDupo>

            <InputContentScroll>
              {/* {disabled
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
                ))} */}
            </InputContentScroll>
            {/* {disabled ? (
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
          )} */}
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
    </Dialog.Portal>
  );
}
