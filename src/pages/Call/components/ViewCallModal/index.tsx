import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import React from "react";
import { z } from "zod";
import { CallInterface } from "../..";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  Overlay,
} from "./style";

export const callInput = z.object({
  id: z.number(),
  tipoChamado: z.string(),
  descricao: z.string(),
  foto: z.string(),
  usuario: z.object({
    email: z.string(),
    ativo: z.boolean(),
    nome: z.string(),
    senha: z.string(),
    tipoUsuario: z.string(),
    nif: z.string(),
  }),
});

export type CallTypeProps = z.infer<typeof callInput>;

interface ViewCallModal {
  callItem: CallInterface;
}

export function ViewCallModal({ callItem }: ViewCallModal) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form>
          <CloseButton>
            <X />
          </CloseButton>

          <Dialog.Title>
            <span>Chamado</span>
          </Dialog.Title>

          <InputContainer>
            <InputContent>
              <label>Foto</label>
              <img src="#" />
            </InputContent>
            <InputContentDupo>
              <div>
                <label>Usuario</label>
                <input
                  type="text"
                  placeholder="Usuário"
                  disabled
                  defaultValue={callItem.usuario.nome}
                />
              </div>
              <div>
                <label>Tipo do Chamado</label>
                <input
                  type="text"
                  placeholder="Chamado"
                  disabled
                  defaultValue={callItem.tipoChamado}
                />
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Descrição</label>
              <textarea
                placeholder="Desc"
                disabled
                defaultValue={callItem.descricao}
              ></textarea>
            </InputContent>
          </InputContainer>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
