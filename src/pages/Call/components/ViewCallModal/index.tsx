import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import React from "react";
import { z } from "zod";
import { CallInterface } from "../..";
import Print from "../../../../assets/testeprintchamado.jpg";
import { API } from "../../../../lib/axios";
import { EditClassModal } from "../../../Home/components/EditClassModal";
import { EditAbsenceTeacherModal } from "../../../ViewTeacher/components/EditAbsenceTeacherModal";
import {
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContainerContent,
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
  editCall: (id: number) => void;
}

export function ViewCallModal({ call, editCall }: ViewCallModal) {
  console.log(call);

  async function handleUpdateStatusCall(value: number) {
    const res = await API.put(`chamado/alterarStatus/${value}`);

    if (res.status == 200) {
      editCall(value);
    }
  }

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
        <InputContainerContent>
          <InputContainer>
            {/* <InputContent>
                <label>Foto</label>
                <a href={call.foto} target="blank" title="Abrir imagem em outra guia"><img src={call.foto} /></a>
              </InputContent> */}
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
            {call.status == "ABERTO" ? (
              <FinalButton onClick={() => handleUpdateStatusCall(call.id)}>
                <button>Fechar chamado</button>
              </FinalButton>
            ) : (
              <></>
            )}
          </InputContainer>
        </InputContainerContent>
      </Content>
    </Dialog.Portal>
  );
}
