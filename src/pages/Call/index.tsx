import React from "react";
import { CallItem } from "./components/CallItem";
import {
  CallButtonContainer,
  CallContainer,
  CallContent,
  CallList,
  CallTitleContainer,
} from "./style";

export function Call() {
  return (
    <CallContainer>
      <CallContent>
        <CallTitleContainer>
          <h1>Chamadas</h1>
          <p>Chamadas realizadas no momento</p>
        </CallTitleContainer>
        <input type="text" placeholder="Buscar por Chamada" />

        <CallList>
          <CallItem />
          <CallItem />
          <CallItem />
          <CallItem />
          <CallItem />
          <CallItem />
        </CallList>
      </CallContent>
    </CallContainer>
  );
}
