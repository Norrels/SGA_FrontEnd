import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import React from "react";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  Overlay,
} from "./style";

export function EditUserModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Editar Usuário</Dialog.Title>

        <InputContainer>
          <InputContent>
            <label>Nome</label>
            <input type="text" placeholder="digite o nome do professor" />
          </InputContent>

          <InputContentDupo>
            <div>
              <label>NIF</label>
              <input type="text" placeholder="digite o NIF" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="digite o Email" />
            </div>
          </InputContentDupo>
          <InputContent>
            <label>Senha</label>
            <input type="text" placeholder="digite a senha" />
          </InputContent>
          <InputContent>
            <label>Repita a Senha</label>
            <input type="text" placeholder="repita a senha" />
          </InputContent>
        </InputContainer>
        <ContainerButtonCreate>
          <button>Editar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
