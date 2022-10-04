import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import {
  Buttons,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  ModalHeader,
  Overlay,
} from "./style";

export function EditAbsenceTeacherModal() {
  const [inativation, setInativation] = useState("aus");
  const [editable, setEditable] = useState(false);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Inativação</Dialog.Title>
          <HeaderButtons>
            {!editable ? (
              <NotePencil
                onClick={() => setEditable(true)}
                size={50}
                weight="light"
              />
            ) : (
              <></>
            )}
            <Dialog.Close>
              <X onClick={() => setEditable(false)} size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <InputContainer>
          <Buttons>
            <button
              disabled={!editable}
              style={
                inativation == "aus"
                  ? { backgroundColor: "#367FBF", color: "#fff" }
                  : { backgroundColor: "#FFF" }
              }
              onClick={() => setInativation("aus")}
            >
              Ausencia
            </button>
            <button
              disabled={!editable}
              style={
                inativation == "fer"
                  ? { backgroundColor: "#367FBF", color: "#fff" }
                  : { backgroundColor: "#FFF" }
              }
              onClick={() => setInativation("fer")}
            >
              Férias
            </button>
          </Buttons>

          <InputContent>
            <InputIndividual>
              <label>Data de início</label>
              <input
                type="date"
                placeholder="dd/MM/yyyy"
                disabled={!editable}
              />
            </InputIndividual>
            <InputIndividual>
              <label>Data de fim</label>
              <input
                type="date"
                placeholder="dd/MM/yyyy"
                disabled={!editable}
              />
            </InputIndividual>
          </InputContent>
          {inativation == "aus" ? (
            <InputContent>
              <label>Descrição</label>
              <input
                type="text"
                placeholder="Digite a descrição"
                disabled={!editable}
              />
            </InputContent>
          ) : (
            <></>
          )}
        </InputContainer>
        {editable ? (
          <FinalButton>
            <button>Salvar</button>
          </FinalButton>
        ) : (
          <></>
        )}
      </Content>
    </Dialog.Portal>
  );
}
