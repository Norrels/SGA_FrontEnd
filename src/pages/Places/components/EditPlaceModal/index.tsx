import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlaceInterface } from "../..";
import { API } from "../../../../lib/axios";
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

interface EditPlaceModalProps {
  editNewPlace: (data: PlaceType) => void;
  placeItem: PlaceInterface;
}

export const placeInput = z.object({
  id: z.number(),
  nome: z.string(),
  capacidade: z.number(),
  tipoAmbiente: z.string(),
  cep: z.string(),
  complemento: z.string(),
  ativo: z.boolean(),
});

export type PlaceType = z.infer<typeof placeInput>;

export function EditPlaceModal({ placeItem, editNewPlace }: EditPlaceModalProps) {
  const [disabled, setDisabled] = useState(true);
  const { register, reset, handleSubmit } = useForm<PlaceType>();

  async function handleUpdatePlace(data: PlaceType) {
    console.log({
      id: placeItem.id,
      nome: data.nome,
      capacidade: data.capacidade,
      tipoAmbiente: data.tipoAmbiente,
      cep: data.cep,
      complemento: data.complemento,
    });

    const res = await API.put(`ambiente/${placeItem.id}`, {
      id: placeItem.id,
      nome: data.nome,
      capacidade: data.capacidade,
      tipoAmbiente: data.tipoAmbiente,
      cep: data.cep,
      complemento: data.complemento,
    });

    if (res.status == 200) {
      editNewPlace(data);
      console.log("funcionou");
    }
  }

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

        <form onSubmit={handleSubmit(handleUpdatePlace)}>
          <InputContainer>
            <InputContent>
              {disabled ? (
                <>
                  <label>Nome</label>
                  <input
                    type="text"
                    defaultValue={placeItem.nome}
                    placeholder="Digite o nome do ambiente"
                    disabled
                  />
                </>
              ) : (
                <>
                  <label>Nome</label>
                  <input
                    type="text"
                    defaultValue={placeItem.nome}
                    placeholder="Digite o nome do ambiente"
                    {...register("nome")}
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
                      {placeItem.tipoAmbiente != "" ? placeItem.tipoAmbiente : "Selecione uma Opção"}
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
                  <select placeholder="Selecione o Tipo de Ambiente" {...register("tipoAmbiente")}>
                    <option value={placeItem.tipoAmbiente}>
                      {placeItem.tipoAmbiente != "" ? placeItem.tipoAmbiente : "Selecione uma Opção"}
                    </option>
                    <option value="UNIDADEMOVEL">Unidade Movel</option>
                    <option value="PRESENCIAL">Presencial</option>
                    <option value="EAD">EAD</option>
                    <option value="ENTIDADE">Entidade</option>
                    <option value="EMPRESA">Empresa</option>
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
                      defaultValue={placeItem.capacidade}
                      type="text"
                      placeholder="Digite o nome do ambiente"
                      disabled
                    />
                  </div>
                  <div>
                    <label>CEP</label>
                    <input
                      defaultValue={placeItem.cep}
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
                      defaultValue={placeItem.capacidade}
                      {...register("capacidade")}
                      type="text"
                      placeholder="Digite o nome do ambiente"
                    />
                  </div>
                  <div>
                    <label>CEP</label>
                    <input
                      defaultValue={placeItem.cep}
                      {...register("cep")}
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
                    defaultValue={placeItem.complemento}
                    type="text"
                    placeholder="Digite o complemento"
                    disabled
                  />
                </>
              ) : (
                <>
                  <label>Complemento</label>
                  <input
                    defaultValue={placeItem.complemento}
                    {...register("complemento")}
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
        </form>
      </Content>
    </Dialog.Portal>
  );
}
