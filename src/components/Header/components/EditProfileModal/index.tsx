import { zodResolver } from "@hookform/resolvers/zod";
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
  id: z.string(),
  nif: z.string().min(3, { message: "* Deve ter mais de 3 caracteres..." }),
  nome: z.string().max(30, { message: "* O nome não deve ter mais de 20 caracteres..." }),
  email: z.string().email({ message: "* Informe um email válido..." }),
  senha: z.string().optional(),
})

interface EditUserModal {
  closeModal: () => void;
}

export type UserType = z.infer<typeof userInput>;

export function EditUserModal({ closeModal }: EditUserModal) {
  const [editable, setEditable] = useState(false);
  const [userToEdit, setUserToEdit] = useState<UserType>();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserType>({ resolver: zodResolver(userInput) });

  async function handleUpdateUser(data: UserType) {
    const res = await API.put(`usuario/perfil/${userToEdit?.id}`, data);
    if (res.status == 200) {
      localStorage.setItem('usuario', JSON.stringify(data))
      reset();
      closeModal();
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const object = JSON.parse(atob(token.split('.')[1]))
      setUserToEdit(object)
    }
  }, [])

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>
            {!editable ? "Perfil" : "Editar perfil"}
          </Dialog.Title>
          <HeaderButtons>
            {!editable && (
              <button onClick={() => setEditable(true)}>
                <NotePencil size={50} weight="light" />
              </button>
            )}
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleUpdateUser)}>
          <input type="hidden" value={userToEdit?.id} {...register("id")}></input>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome"
                  defaultValue={userToEdit?.nome}
                  {...register("nome")}
                  readOnly={!editable}
                />
                {errors.nome && <p>{errors.nome.message}</p>}
              </InputContent>
              <InputContent>
                <InputIndividual>
                  <label>Nif</label>
                  <input
                    type="text"
                    defaultValue={userToEdit?.nif}
                    placeholder="Digite nif"
                    {...register("nif")}
                    readOnly={!editable}
                  />
                  {errors.nif && <p>{errors.nif.message}</p>}
                </InputIndividual>
                <InputIndividual>
                  <label>Email</label>
                  <input
                    type="text"
                    defaultValue={userToEdit?.email}
                    placeholder="Digite o email"
                    {...register("email")}
                    readOnly={!editable}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </InputIndividual>
              </InputContent>
              {editable && (
                <InputContent>
                  <label>Nova senha</label>
                  <input
                    type="password"
                    placeholder="Digite a senha"
                    {...register("senha")}
                  />
                </InputContent>
              )}
              {editable && (
                <InputContent>
                  <label>Repita a senha</label>
                  <input type="text" placeholder="Repita a senha" />
                </InputContent>
              )}

              {editable && (
                <FinalButton>
                  <button>Salvar</button>
                </FinalButton>
              )}
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
