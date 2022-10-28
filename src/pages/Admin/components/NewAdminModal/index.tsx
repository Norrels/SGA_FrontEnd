import { zodResolver } from "@hookform/resolvers/zod";
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

export function NewAdminModal({ closeModal }: NewAdminModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminType>({
    resolver: zodResolver(adminInput),
  });

  console.log(errors);

  function handleCreateAdmin(data: AdminType) {
    handleCreateAdminAPI(data);
    reset();
    closeModal();
    window.location.reload();
  }

  async function handleCreateAdminAPI(admin: AdminType) {
    const res = await API.post("usuario", {
      nome: admin.nome,
      nif: admin.nif,
      email: admin.email,
      senha: admin.email.slice(0, admin.email.search("@")),
      tipoUsuario: "ADMINISTRADOR",
      ativo: true,
    });

    // console.log(res);
    // console.log(admin);

    if (res.status == 200) {
      // console.log("deu certo");
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
                {errors.nome && <p>{errors.nome.message}</p>}
              </div>
              <div>
                <label>NIF</label>
                <input
                  type="text"
                  {...register("nif")}
                  placeholder="Digite o NIF"
                />
                {errors.nif && <p>{errors.nif.message}</p>}
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Digite o Email"
              />
              {errors.email && <p>{errors.email.message}</p>}
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
