import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdminProps } from "../..";
import { API } from "../../../../lib/axios";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  NoteButton,
  Overlay,
} from "./style";

interface EditAdminModalProps {
  admin: AdminProps;
  closeModal: () => void;
}

export const adminInput = z.object({
  id: z.number(),
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
  senha: z.string(),
});

export type AdminType = z.infer<typeof adminInput>;

export function EditAdminModal({ admin, closeModal }: EditAdminModalProps) {
  const [disabled, setDisabled] = useState(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<AdminType>({
    resolver: zodResolver(adminInput),
  });

  function handleUpdateAdmin(data: AdminType) {
    handleUpdateAdminAPI(data);
    reset();
    closeModal();
    // window.location.reload();
  }

  async function handleUpdateAdminAPI(data: AdminType) {
    const res = await API.put(`usuario/${admin.id}`, {
      id: admin.id,
      nome: data.nome,
      nif: data.nif,
      email: data.email,
      tipoUsuario: "ADMINISTRADOR",
      ativo: "true",
      senha: admin.email.slice(0, admin.email.search("@")),
    });

    if (res.status == 200) {
      window.location.reload();
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
          <X onClick={() => setDisabled(true)} />
        </CloseButton>

        <Dialog.Title>Editar Admin</Dialog.Title>
        <form onSubmit={handleSubmit(handleUpdateAdmin)}>
          <InputContainer>
            <InputContentDupo>
              {disabled ? (
                <>
                  <div>
                    <label>Nome</label>
                    <input
                      type="text"
                      defaultValue={admin.nome}
                      placeholder="Digite o nome do curso"
                      disabled
                    />
                    {errors.nome && <p>{errors.nome.message}</p>}
                  </div>
                  <div>
                    <label>NIF</label>
                    <input
                      type="text"
                      defaultValue={admin.nif}
                      placeholder="Digite o NIF"
                      disabled
                    />
                    {errors.nif && <p>{errors.nif.message}</p>}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label>Nome</label>
                    <input
                      type="text"
                      {...register("nome")}
                      defaultValue={admin.nome}
                      placeholder="Digite o nome do curso"
                    />
                    {errors.nome && <p>{errors.nome.message}</p>}
                  </div>
                  <div>
                    <label>NIF</label>
                    <input
                      type="text"
                      {...register("nif")}
                      defaultValue={admin.nif}
                      placeholder="Digite o NIF"
                    />
                    {errors.nif && <p>{errors.nif.message}</p>}
                  </div>
                </>
              )}
            </InputContentDupo>
            <InputContent>
              {disabled ? (
                <>
                  <label>Email</label>
                  <input
                    placeholder="Digite o Email"
                    defaultValue={admin.email}
                    disabled
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </>
              ) : (
                <>
                  <label>Email</label>
                  <input
                    {...register("email")}
                    placeholder="Digite o Email"
                    defaultValue={admin.email}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </>
              )}
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
