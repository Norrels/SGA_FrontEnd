import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

interface NewUserModalProps {
  closeModal: () => void;
}

export const userInput = z.object({
  nome: z
    .string()
    .min(3, { message: "* O Nome deve ser maior que 3 caracteres... " })
    .max(36, { message: "* O Nome deve ser menor que 36 caracteres... " }),
  nif: z
    .string()
    .min(4, { message: "* O NIF deve ser maior que 4 caracteres... " })
    .max(8, { message: "* O NIF deve ser menor que 8 caracteres... " }),
  email: z
    .string()
    .min(6, { message: "* O Email deve ser maior que 6 caracteres... " })
    .max(36, { message: "* O Email deve ser menor que 36 caracteres... " }),
  tipo: z.enum(["ADMINISTRADOR", "SUPORTE"]),
});

export type UserType = z.infer<typeof userInput>;

export function NewUserModal({ closeModal }: NewUserModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(userInput),
  });

  function handleCreateNewUser(data: UserType) {
    handleCreateUserAPI(data);
    reset();
    closeModal();
    window.location.reload();
  }

  async function handleCreateUserAPI(user: UserType) {
    const res = await API.post("usuario", {
      nome: user.nome,
      nif: user.nif,
      email: user.email,
      senha: user.email.slice(0, user.email.search("@")),
      tipo: user.tipo,
      ativo: true,
    });
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Novo usuário</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleCreateNewUser)}>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o nome"
                    {...register("nome")}
                    required
                  />
                  {errors.nome && <p>{errors.nome.message}</p>}
                </InputIndividual>
                <InputIndividual>
                  <label>Nif</label>
                  <input
                    type="text"
                    placeholder="Digite nif"
                    {...register("nif")}
                    required
                  />
                  {errors.nif && <p>{errors.nif.message}</p>}
                </InputIndividual>
              </InputContent>
              <InputContent>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Digite o email"
                  {...register("email")}
                  required
                />
                {errors.email && <p>{errors.email.message}</p>}
              </InputContent>
              <InputContent>
                <label>Tipo de usuário</label>
                <select
                  placeholder="Selecione o tipo do usuário"
                  {...register("tipo")}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecione o tipo do usuário
                  </option>
                  <option value="ADMINISTRADOR">Administrador</option>
                  <option value="SUPORTE">Suporte</option>
                </select>
                {errors.tipo && <p>* Selecione o tipo do usuário...</p>}
              </InputContent>
              <FinalButton>
                <button type="submit">Criar</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
