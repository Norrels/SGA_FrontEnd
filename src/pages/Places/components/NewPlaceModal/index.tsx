import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import React from "react";
import {
  CloseButton,
  ContainerButtonCreate,
  ContainerInputStar,
  ContainerNewCompt,
  Content,
  ContentSelect,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentScroll,
  NewCompt,
  Overlay,
} from "./style";

export function NewPlaceModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X />
        </CloseButton>

        <Dialog.Title>Novo Ambiente</Dialog.Title>

        <InputContainer>
          <InputContent>
            <label>Nome</label>
            <input type="text" placeholder="Digite o nome do ambiente" />
          </InputContent>

          <InputContent>
            <label>Tipo</label>
            <select placeholder="Selecione o Tipo de Ambiente">
              <option>Unidade Movel</option>
              <option>Presencial</option>
              <option>EAD</option>
              <option>Entidade</option>
              <option>Empresa</option>
            </select>
          </InputContent>

          <InputContentDupo>
            <div>
              <label>Capacidade</label>
              <input type="text" placeholder="Digite o nome do ambiente" />
            </div>
            <div>
              <label>CEP</label>
              <input type="text" placeholder="Digite o cep" />
            </div>
          </InputContentDupo>

          <InputContent>
            <label>Complemento</label>
            <input type="text" placeholder="Digite o complemento" />
          </InputContent>
        </InputContainer>
        <ContainerButtonCreate>
          <button>Criar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
