import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";

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

interface ModalCreateNewClassProps {
  closeModal(): void;
}

export function EditAllClassModal({ closeModal }: ModalCreateNewClassProps) {
  const { register, handleSubmit, reset } = useForm();

  async function handleEditAllClass() {
    reset();
    closeModal();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Editar aula(s)</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleEditAllClass)}>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Data de início</label>
                  <input type="date" placeholder="Escolha uma data..." />
                </InputIndividual>
                <InputIndividual>
                  <label>Data de fim</label>
                  <input type="date" placeholder="Escolha uma data..." />
                </InputIndividual>
              </InputContent>
              <InputContent>
                <label>Ambiente</label>
                <select
                  placeholder="Selecione o ambiente..."
                  {...register("tipo")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione o ambiente
                  </option>
                </select>
              </InputContent>
              <InputContent>
                <label>Professor</label>
                <select
                  placeholder="Selecione o professor..."
                  {...register("tipo")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione o professor
                  </option>
                </select>
              </InputContent>

              <FinalButton>
                <button>Salvar</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
