import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash } from "phosphor-react";
import React from "react";
import { CallInterface } from "../..";
import Cobrinha from "../../../../assets/Cobrinha.svg";
import Idea from "../../../../assets/Idea.svg";
import Thought from "../../../../assets/Thought.svg";
import { ViewCallModal } from "../ViewCallModal";
import {
  CallDescription,
  CallInfoType,
  CallItemButton,
  CallItemButton2,
  CallItemButtonContainer,
  CallItemContainer,
  CallItemIcon,
  CallItemInfoContent,
} from "./style";

interface CallProps {
  callItem: CallInterface;
}

export function CallItem({ callItem }: CallProps) {
  return (
    <CallItemContainer>
      <CallItemInfoContent>
        <CallItemIcon>
          {callItem.tipoChamado == "OUTRO" ? <img src={Thought} /> : <></>}
          {callItem.tipoChamado == "IDEIA" ? <img src={Idea} /> : <></>}
          {callItem.tipoChamado == "PROBLEMA" ? <img src={Cobrinha} /> : <></>}
        </CallItemIcon>

        <CallDescription>
          <CallItemInfoContent>
            <h3>{callItem.tipoChamado}</h3>
            <CallInfoType>
              <p>Fechada</p>
            </CallInfoType>
          </CallItemInfoContent>
          <CallItemInfoContent>
            <p>
              Usuário <span>Odair</span>
            </p>
          </CallItemInfoContent>
        </CallDescription>
      </CallItemInfoContent>

      <CallItemButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger style={{ border: "none" }}>
            <CallItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </CallItemButton>
          </Dialog.Trigger>
          <ViewCallModal 
            callItem={callItem}
          />
        </Dialog.Root>

        <CallItemButton2 buttonColor="delete">
          <Trash color="#fff" size={25} />
        </CallItemButton2>
      </CallItemButtonContainer>
    </CallItemContainer>
  );
}
