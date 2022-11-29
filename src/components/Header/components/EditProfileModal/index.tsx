import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import { useEffect, useState } from "react";
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

export const userInput = z.object({
  id: z.number(),
  nif: z.string(),
  nome: z.string(),
  email: z.string(),
  senha: z.string(),
})

interface EditUserModal {
  closeModal: () => void;
}

export type UserType = z.infer<typeof userInput>;

export function EditUserModal({ closeModal }: EditUserModal) {
  const [editable, setEditable] = useState(false);
  const {register, handleSubmit, reset} = useForm<UserType>();  

  function handleUpdateUser(data: UserType) {
    handleUpdateUserAPI(data);
    reset();
    closeModal();
  }

  async function handleUpdateUserAPI(data: UserType) {
    const res = await API.put('', {});

    if(res.status == 200) {

    }
  }
  
  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>
            {!editable ? "Perfil" : "Editar perfil"}
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
          <InputScroll>
            <InputContainer>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome"
                  {...register("nome")}
                  readOnly={!editable}
                />
                {/* {errors.nome && <p>{errors.nome.message}</p>} */}
              </InputContent>
              <InputContent>
                <InputIndividual>
                  <label>Nif</label>
                  <input
                    type="text"
                    placeholder="Digite nif"
                    {...register("nif")}
                    readOnly={!editable}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Digite o email"
                    {...register("email")}
                    readOnly={!editable}
                  />
                </InputIndividual>
              </InputContent>
              {editable ? (
                <InputContent>
                  <label>Senha</label>
                  <input
                    type="password"
                    placeholder="Digite a senha"
                    {...register("senha")}
                  />
                </InputContent>
              ) : (
                <></>
              )}
              {editable ? (
                <InputContent>
                  <label>Repita a senha</label>
                  <input type="text" placeholder="Repita a senha" />
                </InputContent>
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
    </Dialog.Portal>
  );
}
