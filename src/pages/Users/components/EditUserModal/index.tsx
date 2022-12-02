import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserProps } from "../..";
import { API } from "../../../../lib/axios";
import {
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

interface EditUserModalProps {
  user: UserProps;
  closeModal: () => void;
}

export const userInput = z.object({
  id: z.string(),
  nome: z
    .string()
    .min(3, { message: "*** O Nome deve ser maior que 3 caracteres... " })
    .max(36, { message: "*** O Nome deve ser menor que 36 caracteres... " }),
  nif: z
    .string()
    .min(4, { message: "*** O NIF deve ser maior que 4 caracteres... " })
    .max(8, { message: "*** O NIF deve ser menor que 8 caracteres... " }),
  email: z
    .string()
    .min(6, { message: "*** O Email deve ser maior que 6 caracteres... " })
    .max(36, { message: "*** O Email deve ser menor que 36 caracteres... " }),
  tipo: z.enum(["USUARIO", "ADMINISTRADOR"]),
});

export type UserType = z.infer<typeof userInput>;

export function EditUserModal({ user, closeModal }: EditUserModalProps) {
  const [editable, setEditable] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(userInput),
  });

  console.log(errors)
  function handleUpdateUser(data: UserType) {
    handleUpdateUserAPI(data);
    reset();
    closeModal();
  }

  async function handleUpdateUserAPI(data: UserType) {
    const res = await API.put(`usuario/${user.id}`, {
      id: user.id,
      nome: data.nome,
      nif: data.nif,
      email: data.email,
      tipo: data.tipo,
      ativo: "true",
    });

    console.log(res)

    if (res.status == 200) {
      window.location.reload();
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>
            {!editable ? "Usuário" : "Editar usuário"}
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
        <form onSubmit={handleSubmit(handleUpdateUser)}>
          <input
            type="hidden"
              value={user.id}
            {...register("id")}
          />
          <InputScroll>
            <InputContainer>
              <InputContent disabled={"on"}>
                <InputIndividual>
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o nome"
                    defaultValue={user.nome}
                    {...register("nome")}
                    readOnly={!editable}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Nif</label>
                  <input
                    type="text"
                    placeholder="Digite nif"
                    defaultValue={user.nif}
                    {...register("nif")}
                    readOnly={!editable}
                  />
                </InputIndividual>
              </InputContent>
              <InputContent disabled={"on"}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Digite o email"
                  defaultValue={user.email}
                  {...register("email")}
                  readOnly={!editable}
                />
                {/* {errors.email && <p>{errors.email.message}</p>} */}
              </InputContent>
              <InputContent disabled={!editable ? "disabled" : "on"}>
                <label>Tipo de usuário</label>
                <select
                  placeholder="Selecione o tipo do usuário"
                  defaultValue={user.tipo}
                  {...register("tipo")}
                >
                  <option value="USUARIO">Usuário</option>
                  <option value="ADMINISTRADOR">Administrador</option>
                </select>
                {errors.tipo && <p>* Selecione o tipo do usuário...</p>}
              </InputContent>
              {editable ? (
                <FinalButton>
                  <button type="submit">Salvar</button>
                </FinalButton>
              ) : (
                <></>
              )}
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
