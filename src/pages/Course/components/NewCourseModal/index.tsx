import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  NewModalContainer,
  NewModalContent,
  NewModalDivider,
  NewModalOptionsContainer,
  NewModalOptionsContent,
  CloseButton,
  Content,
  Overlay,
  NewModalTypeContainerButton,
  TypeCourseButton,
  NewModalUnityOptionsContainer,
} from "./style";

export default function NewCourseModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Novo Curso</Dialog.Title>

        <NewModalContainer>
          <NewModalOptionsContainer>
            <NewModalOptionsContent>
              <span>
                <p>Nome</p>
                <input type="text" placeholder="Digite um nome" />
              </span>
            </NewModalOptionsContent>
          </NewModalOptionsContainer>

          <NewModalOptionsContainer>
            <NewModalOptionsContent>
              <span>
                <p>Tipo</p>
                <NewModalTypeContainerButton>
                  <NewModalOptionsContainer></NewModalOptionsContainer>
                </NewModalTypeContainerButton>
              </span>
            </NewModalOptionsContent>
          </NewModalOptionsContainer>

          <NewModalOptionsContainer>
            <NewModalOptionsContent>
              <span>
                <p>Unidade Curricular</p>
                <NewModalUnityOptionsContainer>
                  <NewModalContent>
                    <input
                      type="text"
                      placeholder="Digite uma Unidade Curricular"
                    />
                  </NewModalContent>
                  <NewModalContent>
                    <input type="text" placeholder="Carga Horária" />
                  </NewModalContent>
                </NewModalUnityOptionsContainer>
              </span>
            </NewModalOptionsContent>
          </NewModalOptionsContainer>
          <button type="submit">Criar</button>
        </NewModalContainer>
        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}
