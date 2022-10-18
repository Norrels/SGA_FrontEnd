import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";

import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  Overlay,
} from "./style";

interface ModalCreateNewClassProps {
  closeModal(): void
}

export function EditClassModal({  closeModal }: ModalCreateNewClassProps) {
  const { register, handleSubmit, reset } = useForm()

  async function handleCreateNewPlace() {
    reset()
    closeModal()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form onSubmit={handleSubmit(handleCreateNewPlace)}>
          <CloseButton>
            <X />
          </CloseButton>

          <Dialog.Title>Editar Aula</Dialog.Title>

          <InputContainer>
            <InputContentDupo>
              <div>
                <label>Data Inicio</label>
                <input type="date" placeholder="" />
              </div>
              <div>
                <label>Selecione o Ambiente</label>
                <select placeholder="Selecione o Ambiente">
                  <option>Selecione o Ambiente</option>
                </select>
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Selecione o Professor</label>
              <select placeholder="Selecione o Professor">
                <option>Selecione o Professor</option>
              </select>
            </InputContent>

          </InputContainer>
          <ContainerButtonCreate>
            <button type="submit" >Editar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
