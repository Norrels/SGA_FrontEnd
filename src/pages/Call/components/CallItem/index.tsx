import { DotsThree, Pencil, Trash } from "phosphor-react";
import React from "react";
import Minhocona from "../../../../assets/Minhocona.svg"
import {
  CallDescription,
  CallInfoType,
  CallItemButton,
  CallItemButtonContainer,
  CallItemContainer,
  CallItemIcon,
  CallItemInfoContent,
} from "./style";

export function CallItem() {
  return (
    <CallItemContainer>
      <CallItemInfoContent>
        <CallItemIcon>
          <img src={Minhocona} />
        </CallItemIcon>

        <CallDescription>
          <CallItemInfoContent>
            <h3>Problema</h3>
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
