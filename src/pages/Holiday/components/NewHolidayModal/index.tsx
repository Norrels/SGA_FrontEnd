import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import React from "react";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  Overlay,
} from "./style";

export function NewHolidayModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X />
        </CloseButton>

        <Dialog.Title>Novo dia</Dialog.Title>

        <InputContainer>
          <InputContent>
            <label>Nome</label>
            <input type="text" placeholder="digite o nome do dia" />
          </InputContent>
          <InputContent>
            <label>Tipo</label>
            <select>
                <option>Selecione o tipo de dia</option>
                <option>Feriado</option>
            </select>
          </InputContent>
          <InputContent>
            <label>Data</label>
            <input type="date" placeholder="dd/MM/yyyy" />
          </InputContent>
        </InputContainer>
        <ContainerButtonCreate>
          <button>Criar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
