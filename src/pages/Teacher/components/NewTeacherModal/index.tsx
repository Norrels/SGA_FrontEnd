import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { API } from "../../../../lib/axios";
import { Rating } from "./components/Rating";
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
  Overlay,
} from "./style";

export const teacherInput = z.object({
  id: z.number(),
  nome: z.string(),
  cargaSemanal: z.number(),
  foto: z.string(),
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

interface NewTeacherModalProps {
  addNewTeacher: (data: TeacherType) => void;
}

export default function NewTeacherModal({
  addNewTeacher,
}: NewTeacherModalProps) {
  const { register, reset, handleSubmit } = useForm<TeacherType>();
  //Gambiara ? :D
  const [baseImage, setBaseImage] = useState("");

  function handleCreateNewTeacher(data: TeacherType) {
    data.ativo = true;
    createTeacherAPI(data);
    reset();
  }

  async function createTeacherAPI(data: TeacherType) {
    // const res = await API.post("/professor", data);
    // if(res.status == 200) {
      data.foto = baseImage
    addNewTeacher(data);
    // }
  }

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const base64 = await convertBase64(file);
    setBaseImage(String(base64));
  };

  function convertBase64(file: Blob) {
    return new Promise((resolve, reject) => {
      const fileRender = new FileReader();
      fileRender.readAsDataURL(file);

      fileRender.onload = function () {
        resolve(fileRender.result);
      };

      fileRender.onerror = function (error) {
        reject(error);
      };
    });
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <form onSubmit={handleSubmit(handleCreateNewTeacher)}>
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <Dialog.Title>Novo Professor</Dialog.Title>

          <InputContainer>
            <InputContent>
              <label>Nome</label>
              <input
                type="text"
                placeholder="digite o nome do professor"
                {...register("nome")}
              />
            </InputContent>
            <InputContent>
              <label>Email</label>
              <input
                type="email"
                placeholder="digite o email do professor"
                {...register("email")}
              />
            </InputContent>
            <InputContentDupo>
              <div>
                <label>Carga horária Semanal</label>
                <input
                  type="text"
                  placeholder="digite as horas"
                  {...register("cargaSemanal")}
                />
              </div>
              <div>
                <label>Foto</label>
                <input
                  type="file"
                  id="file"
                  multiple={false}
                  accept="image/*"
                  placeholder="envie uma foto do professor"
                  onChange={uploadImage}
                  // {...register("foto")}
                />
              </div>
            </InputContentDupo>
            <InputContentScroll>
              {/* {input.map((v) => {
              return (
                <ContainerInputStar>
                  <ContentSelect>
                    <label>Competência</label>
                    <select>
                      <option>Selecione uma Unidade Curricular</option>
                      <option>Java</option>
                    </select>
                  </ContentSelect>
                  <Rating />
                </ContainerInputStar>
              );
            })} */}
            </InputContentScroll>
            <ContainerNewCompt
            >
              <NewCompt>
                <div>
                  <Plus size={32} />
                  <br />
                  <span>Adicionar Competência</span>
                </div>
              </NewCompt>
            </ContainerNewCompt>
          </InputContainer>
          <ContainerButtonCreate>
            <button>Criar</button>
          </ContainerButtonCreate>
        </Content>
      </form>
    </Dialog.Portal>
  );
}
