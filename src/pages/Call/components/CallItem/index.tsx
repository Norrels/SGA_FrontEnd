import { DotsThree, Pencil, Trash } from "phosphor-react";
import React from "react";
import { CallInterface } from "../..";
import Cobrinha from "../../../../assets/Cobrinha.svg"
import Idea from "../../../../assets/Idea.svg"
import Thought from "../../../../assets/Thought.svg"
import {
  CallDescription,
  CallInfoType,
  CallItemButton,
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
          {callItem.tipoChamado == "OUTRO" ? (
            <img src={Thought} />
          ): (<></>)}
          {callItem.tipoChamado == "IDEIA" ? (
            <img src={Idea} />
          ): (<></>)}
          {callItem.tipoChamado == "PROBLEMA" ? (
            <img src={Cobrinha} />
          ): (<></>)}
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
        <CallItemButton buttonColor="edit">
          <DotsThree color="#000" size={25} />
        </CallItemButton>
        
        <CallItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </CallItemButton>
      </CallItemButtonContainer>
    </CallItemContainer>
  );
}
