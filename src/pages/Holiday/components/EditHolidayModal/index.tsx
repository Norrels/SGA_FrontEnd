import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  NoteButton,
  Overlay,
} from "./style";

interface Holiday {
  id: number;
  dataInicio: string;
  dataFinal: string;
  nome: string;
  tipoDeDia: string;
}

export function EditHolidayModal({
  id,
  dataFinal,
  dataInicio,
  nome,
  tipoDeDia,
}: Holiday) {
  const [disabled, setDisabled] = useState(true);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        {disabled ? (
          <>
            <NoteButton>
              <NotePencil onClick={() => setDisabled(false)} size={32} />
            </NoteButton>
          </>
        ) : (
          <></>
        )}
        <CloseButton>
          <X size={24} onClick={() => setDisabled(true)} />
        </CloseButton>

        <Dialog.Title>Editar Dia</Dialog.Title>

        <InputContainer>
          {disabled ? (
            <>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  value={nome}
                  placeholder="digite o nome do professor"
                  disabled
                />
              </InputContent>
              <InputContent>
                <label>Tipo</label>
                <select disabled>
                  <option>Feriado</option>
                  <option>Imenda</option>
                </select>
              </InputContent>
              <InputContent>
                <label>Data</label>
                <input
                  type="date"
                  value={dataInicio}
                  placeholder="digite a data"
                  disabled
                />
              </InputContent>
            </>
          ) : (
            <>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  defaultValue={nome}
                  placeholder="digite o nome do professor"
                />
              </InputContent>
              <InputContent>
                <label>Tipo</label>
                <select>
                  <option>Feriado</option>
                  <option>Imenda</option>
                </select>
              </InputContent>
              <InputContent>
                <label>Data</label>
                <input
                  type="date"
                  defaultValue={dataInicio}
                  placeholder="digite a data"
                />
              </InputContent>
            </>
          )}
        </InputContainer>
        <ContainerButtonCreate>
          <button>Editar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
