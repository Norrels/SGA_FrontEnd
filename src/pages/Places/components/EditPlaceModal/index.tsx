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

interface Place {
  id: number;
  name?: string;
  capacidade?: number;
  tipoAmbiente?: string;
  cep?: string;
  complemento?: string;
  click: boolean;
}

export function EditPlaceModal() {
  const [disabled, setDisabled] = useState(false);

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
          <X onClick={() => setDisabled(true)} />
        </CloseButton>

        <Dialog.Title>Editar Ambiente</Dialog.Title>

        <InputContainer>
          <InputContent>
            {disabled ? (
              <>
                <label>Nome</label>
                <input
                  type="text"
                  /* value={name} */
                  placeholder="Digite o nome do ambiente"
                  disabled
                />
              </>
            ) : (
              <>
                <label>Nome</label>
                <input
                  type="text"
                  /* defaultValue={name} */
                  placeholder="Digite o nome do ambiente"
                />
              </>
            )}
          </InputContent>

          <InputContent>
            {disabled ? (
              <>
                <label>Tipo</label>
                <select placeholder="Selecione o Tipo de Ambiente" disabled>
                  <option>
                    {/* {tipoAmbiente != "" ? tipoAmbiente : "Selecione uma Opção"} */}
                  </option>
                  <option>Unidade Movel</option>
                  <option>Presencial</option>
                  <option>EAD</option>
                  <option>Entidade</option>
                  <option>Empresa</option>
                </select>
              </>
            ) : (
              <>
                <label>Tipo</label>
                <select placeholder="Selecione o Tipo de Ambiente">
                  <option>
                    {/* {tipoAmbiente != "" ? tipoAmbiente : "Selecione uma Opção"} */}
                  </option>
                  <option>Unidade Movel</option>
                  <option>Presencial</option>
                  <option>EAD</option>
                  <option>Entidade</option>
                  <option>Empresa</option>
                </select>
              </>
            )}
          </InputContent>

          <InputContentDupo>
            {disabled ? (
              <>
                <div>
                  <label>Capacidade</label>
                  <input
                    /* value={capacidade} */
                    type="text"
                    placeholder="Digite o nome do ambiente"
                    disabled
                  />
                </div>
                <div>
                  <label>CEP</label>
                  <input
                    /* value={cep} */
                    type="text"
                    placeholder="Digite o cep"
                    disabled
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label>Capacidade</label>
                  <input
                    /* defaultValue={capacidade} */
                    type="text"
                    placeholder="Digite o nome do ambiente"
                  />
                </div>
                <div>
                  <label>CEP</label>
                  <input
                    /* defaultValue={cep} */
                    type="text"
                    placeholder="Digite o cep"
                  />
                </div>
              </>
            )}
          </InputContentDupo>

          <InputContent>
            {disabled ? (
              <>
                <label>Complemento</label>
                <input
                  /* value={complemento} */
                  type="text"
                  placeholder="Digite o complemento"
                  disabled
                />
              </>
            ) : (
              <>
                <label>Complemento</label>
                <input
                  /* defaultValue={complemento} */
                  type="text"
                  placeholder="Digite o complemento"
                />
              </>
            )}
          </InputContent>
        </InputContainer>
        <ContainerButtonCreate>
          <button>Editar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
