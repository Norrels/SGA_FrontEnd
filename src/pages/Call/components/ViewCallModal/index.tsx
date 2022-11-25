import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import React from "react";
import { z } from "zod";
import { CallInterface } from "../..";
import Print from "../../../../assets/testeprintchamado.jpg";
import {
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
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
  call: CallInterface;
}

export function ViewCallModal({ call }: ViewCallModal) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Chamado</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <label>Foto</label>
                <a href={call.foto} target="blank" title="Abrir imagem em outra guia"><img src={call.foto} /></a>
              </InputContent>
              <InputContent>
                <InputIndividual>
                  <label>Usuário</label>
                  <input
                    type="text"
                    defaultValue={call.usuario.nome}
                    readOnly={true}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Tipo do chamado</label>
                  <input type="text" defaultValue={call.tipo} readOnly={true} />
                </InputIndividual>
              </InputContent>
              <InputContent>
                <label>Descrição</label>
                <textarea
                  defaultValue={call.descricao}
                  readOnly={true}
                ></textarea>
              </InputContent>
              <FinalButton>
                <button>Fechar chamado</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
