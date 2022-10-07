import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
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
  Overlay,
} from "./style";

interface NewAdminModalProps {
  admin: AdminProps;
}

export const adminInput = z.object({
  id: z.number(),
  nome: z.string(),
  nif: z.string(),
  email: z.string(),
  senha: z.string()
});

export type AdminType = z.infer<typeof adminInput>;

export function NewAdminModal() {
  const { register, handleSubmit, reset } = useForm<AdminType>();

  function handleCreateAdmin(data: AdminType) {
    handleCreateAdminAPI(data);
    reset();
  }

  async function handleCreateAdminAPI(admin: AdminType) {
    const res = await API.post("usuario", {
      nome: admin.nome,
      nif: admin.nif,
      email: admin.email,
      senha: admin.email.slice(0, admin.email.search("@")),
      tipoUsuario: "ADMINISTRADOR",
      ativo: true
    });

    console.log(res);
    console.log(admin);

    if (res.status == 200) {
      console.log("deu certo");
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form onSubmit={handleSubmit(handleCreateAdmin)}>
          <CloseButton>
            <X />
          </CloseButton>
          <Dialog.Title>
            <span>Novo Administrador</span>
          </Dialog.Title>
          <InputContainer>
            <InputContentDupo>
              <div>
                <label>Nome</label>
                <input
                  type="text"
                  {...register("nome")}
                  placeholder="Digite o nome"
                />
              </div>
              <div>
                <label>NIF</label>
                <input
                  type="text"
                  {...register("nif")}
                  placeholder="Digite o NIF"
                />
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Digite o Email"
              />
            </InputContent>
          </InputContainer>
          <ContainerButtonCreate>
            <button type="submit">Criar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
