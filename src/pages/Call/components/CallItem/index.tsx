import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import React from "react";
import { z } from "zod";
import { CallInterface } from "../..";
import Cobrinha from "../../../../assets/Cobrinha.svg";
import Idea from "../../../../assets/Idea.svg";
import Thought from "../../../../assets/Thought.svg";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { API } from "../../../../lib/axios";
import { ViewCallModal } from "../ViewCallModal";
import {
  CallInfoType,
  CallItemButton,
  CallItemButtonContainer,
  CallItemContainer,
  CallItemIcon,
  CallItemInfoContainer,
  CallItemInfoContent,
  ItemInfoContentHeader,
} from "./style";

interface CallProps {
  call: CallInterface;
}

export const callInput = z.object({
  id: z.number(),
  tipo: z.string(),
  descricao: z.string(),
  foto: z.string(),
});

export type CallType = z.infer<typeof callInput>;

export function CallItem({ call }: CallProps) {
  async function handleDelete(data: CallType) {
    const res = await API.delete(`chamado/${data.id}`);
    console.log(res);
  }

  return (
    <CallItemContainer>
      <CallItemInfoContainer>
          <CallItemIcon>
            {call.tipo === "OUTRO" && <img src={Thought} />}
            {call.tipo === "IDEIA" && <img src={Idea} />}
            {call.tipo === "PROBLEMA" && <img src={Cobrinha} />}
          </CallItemIcon>

          <CallItemInfoContent>
            <ItemInfoContentHeader>
              <h3>{call.tipo.toLocaleLowerCase()}</h3>
              <CallInfoType>{/* {call.status.toLocaleLowerCase()} */}</CallInfoType>
            </ItemInfoContentHeader>
            <p>
              Usuário: <span>{call.usuario.nome}</span>
            </p>
          </CallItemInfoContent>
      </CallItemInfoContainer>

      <CallItemButtonContainer>
        <Dialog.Root /* open={open} onOpenChange={setOpen} */>
          <Dialog.Trigger
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
            }}
          >
            <CallItemButton buttonColor="edit">
              <DotsThree color="#fff" size={32} />
            </CallItemButton>
          </Dialog.Trigger>
          <ViewCallModal call={call} /* closeModal={closeModal} */ />
        </Dialog.Root>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <CallItemButton buttonColor="delete">
              <Trash color="#fff" size={26} />
            </CallItemButton>
          </AlertDialog.Trigger>
          {/* <DeleteAlert deleteById={handleDelete} /> */}
        </AlertDialog.Root>
      </CallItemButtonContainer>

      {/* <CallItemButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger style={{ border: "none" }}>
            <CallItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </CallItemButton>
          </Dialog.Trigger>
          <ViewCallModal callItem={callItem} />
        </Dialog.Root>

        <CallItemButton2
          onClick={() => handleDeleteCall(callItem)}
          buttonColor="delete"
        >
          <Trash color="#fff" size={25} />
        </CallItemButton2>
      </CallItemButtonContainer> */}
    </CallItemContainer>
  );
}
