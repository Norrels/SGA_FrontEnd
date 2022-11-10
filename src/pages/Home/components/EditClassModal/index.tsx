import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { AulaProps } from "../Calender";

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
  aulas: AulaProps
}

export function EditClassModal({ closeModal, aulas }: ModalCreateNewClassProps) {
  const { register, handleSubmit, reset } = useForm();

  async function handleEditClass() {
    reset();
    closeModal();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Editar aula</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleEditClass)}>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Data</label>
                  <input type="date" placeholder="Escolha uma data..." />
                </InputIndividual>
                <InputIndividual>
                  <label>Ambiente</label>
                  <select
                    placeholder="Selecione o ambiente..."
                    {...register("tipo")}
                    defaultValue={aulas.ambiente.id}
                  >
                    <option value="" disabled>
                      Selecione o ambiente
                    </option>
                  </select>
                </InputIndividual>
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
