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

export function NewAdminModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form>
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
                <input type="text" placeholder="Digite o nome" />
              </div>
              <div>
                <label>NIF</label>
                <input type="text" placeholder="Digite o NIF" />
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Email</label>
              <input placeholder="Digite o Email" />
            </InputContent>
          </InputContainer>
          <ContainerButtonCreate>
            <button>Criar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
