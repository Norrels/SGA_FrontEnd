import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import { AbsenseProps } from "../..";
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

interface AbsenseItemProps {
  absence: AbsenseProps;
  closeModal: () => void;
}

export function EditAbsenceTeacherModal({ absence, closeModal }: AbsenseItemProps) {
  const [inativation, setInativation] = useState("aus");
  const [editable, setEditable] = useState(false);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>Inativação</Dialog.Title>
          <HeaderButtons>
            {!editable ? (
              <button onClick={() => setEditable(true)}>
                <NotePencil size={50} weight="light" />
              </button>
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
              disabled
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
              disabled
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
                readOnly={!editable}
              />
            </InputIndividual>
            <InputIndividual>
              <label>Data de fim</label>
              <input
                type="date"
                placeholder="dd/MM/yyyy"
                readOnly={!editable}
              />
            </InputIndividual>
          </InputContent>
          {inativation == "aus" ? (
            <InputContent>
              <label>Descrição</label>
              <input
                type="text"
                placeholder="Digite a descrição"
                readOnly={!editable}
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
