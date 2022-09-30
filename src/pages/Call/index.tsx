import React, { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { CallItem } from "./components/CallItem";
import {
  CallButtonContainer,
  CallContainer,
  CallContent,
  CallList,
  CallTitleContainer,
} from "./style";

export interface CallInterface {
  id: number;
  tipoChamado: string;
  descricao: string;
  foto: string;
  usuario: Usuario;
}
[];

interface Usuario {
  email: string;
  ativo: boolean;
  nome: string;
  senha: string;
  tipoUsuario: string;
  nif: string;
}

export function Call() {
  const [calls, setCalls] = useState<CallInterface[]>([]);

  async function fetchCalls() {
    const res = await API.get("chamado");
    setCalls(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    fetchCalls();
  }, []);

  return (
    <CallContainer>
      <CallContent>
        <CallTitleContainer>
          <h1>Chamadas</h1>
          <p>Chamadas realizadas no momento</p>
        </CallTitleContainer>
        <input type="text" placeholder="Buscar por Chamada" />

        <CallList>
          {calls.map((call) => (
            <CallItem key={call.id} callItem={call} />
          ))}
        </CallList>
      </CallContent>
    </CallContainer>
  );
}
