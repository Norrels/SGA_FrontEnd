import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import React, { useState } from "react";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentTriple,
  InputLeft,
  Overlay,
  RightLeft,
} from "./style";

export function EditAbsenceTeacherModal() {
  const [inativation, setInativation] = useState("aus");

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Inativação</Dialog.Title>

        <InputContainer>
          <InputContentTriple>
            {inativation == "aus" ? (
              <div>
                <button disabled style={{ background: "#25B5E9", color: "white" }}>
                  Ausência
                </button>
              </div>
            ) : (
              <div>
                <button onClick={() => setInativation("aus")}>Ausência</button>
              </div>
            )}
            {inativation == "fer" ? (
              <div>
                <button style={{ background: "#25B5E9", color: "white" }}>
                  Férias
                </button>
              </div>
            ) : (
              <div>
                <button onClick={() => setInativation("fer")}>Férias</button>
              </div>
            )}
            {inativation == "dem" ? (
              <button style={{ background: "#25B5E9", color: "white" }}>
                Demissão
              </button>
            ) : (
              <div>
                <button onClick={() => setInativation("dem")}>Demissão</button>
              </div>
            )}
          </InputContentTriple>
          {inativation == "dem" ? (
            <></>
          ) : (
            <>
              <InputContentDupo>
                <InputLeft>
                  <label>Data de início</label>
                  <input type="date" placeholder="dd/MM/yyyy" />
                </InputLeft>
                <RightLeft>
                  <label>Data de fim</label>
                  <input type="date" placeholder="dd/MM/yyyy" />
                </RightLeft>
              </InputContentDupo>
              <InputContent>
                {inativation == "fer" ? (
                  <>
                  {/* Colocar a opacidade menor, não só disabiltar o botão */}
                    <label>Descrição</label>
                    <input
                      disabled
                      value=""
                      type="text"
                      placeholder="Digite a descrição"
                    />
                  </>
                ) : (
                  <>
                    <label>Descrição</label>
                    <input type="text" placeholder="Digite a descrição" />
                  </>
                )}
              </InputContent>
            </>
          )}
        </InputContainer>
        <ContainerButtonCreate>
          {inativation == "dem" ? (
            <>
              <button>Demitir</button>
            </>
          ) : (
            <button>Inativar</button>
          )}
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
