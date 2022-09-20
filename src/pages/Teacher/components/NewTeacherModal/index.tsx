import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import React, { useState } from "react";
import { Rating } from "./components/Rating";
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

export default function NewTeacherModal() {
  const [input, setInput] = useState([1]);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X onClick={() => setInput([1])} size={24} />
        </CloseButton>

        <Dialog.Title>Novo Professor</Dialog.Title>

        <InputContainer>
          <InputContent>
            <label>Nome</label>
            <input type="text" placeholder="digite o nome do professor" />
          </InputContent>
          <InputContentDupo>
            <div>
              <label>Carga horária Semanal</label>
              <input type="text" placeholder="digite as horas" />
            </div>
            <div>
              <label>Foto</label>
              <input
                type="file"
                id="file"
                accept="image/*"
                placeholder="envie uma foto do professor"
              />
            </div>
          </InputContentDupo>
          <InputContentScroll>
            {input.map((v) => {
              return (
                <ContainerInputStar>
                  <ContentSelect>
                    <label>Competência</label>
                    <select>
                      <option>Selecione uma Unidade Curricular</option>
                      <option>Java</option>
                    </select>
                  </ContentSelect>
                  <Rating />
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
                <span>Adicionar Competência</span>
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
