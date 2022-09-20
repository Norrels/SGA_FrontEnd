import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useState } from "react";
import {
  CloseButton,
  Content,
  Overlay,
  InputContainer,
  InputContent,
  InputContentDupo,
  ContainerButtonCreate,
  ContainerNewCompt,
  InputContentScroll,
  NewCompt,
  ContainerInputStar,
  ContentSelect,
  ContentSelectHours,
} from "./style";

export default function NewCourseModal() {
  const [input, setInput] = useState([0]);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X onClick={() => setInput([1])} size={24} />
        </CloseButton>

        <Dialog.Title>Novo curso</Dialog.Title>

        <InputContainer>
          <InputContent>
            <label>Nome</label>
            <input type="text" placeholder="digite seu nome" />
          </InputContent>

          <InputContent>
            <label>Tipo</label>
            <select>
              <option>Selecione o tipo de curso</option>
            </select>
          </InputContent>

          <InputContentScroll>
            {input.map((v) => {
              return (
                <ContainerInputStar>
                  <ContentSelect>
                    <label>Unidade Curricular</label>
                    <select>
                      <option>Selecione uma Unidade Curricular</option>
                      <option>Projetos 160h</option>
                    </select>
                  </ContentSelect>
                  <ContentSelectHours>
                    <label>Horas</label>
                    <input type="text" placeholder="Digite as horas" />
                  </ContentSelectHours>
                </ContainerInputStar>
              );
            })}
          </InputContentScroll>
          <ContainerNewCompt
            onClick={(e) => {
              setInput([...input, 1]);
            }}
          >
            <NewCompt>
              <div>
                <Plus size={32} />
                <br />
                <span>Adicionar Unidade Curricular</span>
              </div>
            </NewCompt>
          </ContainerNewCompt>
        </InputContainer>
        <ContainerButtonCreate>
          <button>Criar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
