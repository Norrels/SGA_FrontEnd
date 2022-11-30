import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import React from "react";
import { z } from "zod";
import { CallInterface } from "../..";
import Cobrinha from "../../../../assets/Cobrinha.svg";
import Idea from "../../../../assets/Idea.svg";
import Thought from "../../../../assets/Thought.svg";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { ReactivateAlert } from "../../../../components/ReactivateAlert";
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
import { DeleteAlertCall } from "../../../../components/DeleteAlertCall";

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
  async function handleUpdateStatusUserAPI() {
    const res = await API.delete(`chamado/${call.id}`);

    if(res.status == 200) {
      window.location.reload();
    }
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
            <h3>{call.tipo?.toLocaleLowerCase()}</h3>
            <CallInfoType>{call.status.toLocaleLowerCase()}</CallInfoType>
          </ItemInfoContentHeader>
          <p>
            Usuário: <span>{call.usuario.nome}</span>
          </p>
        </CallItemInfoContent>
      </CallItemInfoContainer>

      <CallItemButtonContainer>
        <>
          <Dialog.Root>
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
            <ViewCallModal call={call} />
          </Dialog.Root>
        </>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <CallItemButton buttonColor="delete">
              <Trash color="#fff" size={26} />
            </CallItemButton>
          </AlertDialog.Trigger>
          <DeleteAlertCall deleteById={handleUpdateStatusUserAPI} />
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
