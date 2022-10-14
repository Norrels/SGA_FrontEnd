import React, { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { CallItem } from "./components/CallItem";
import {
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
  const [callMatches, setCallMatches] = useState<CallInterface[]>([]);

  async function fetchCalls() {
    const res = await API.get("chamado");
    setCalls(res.data);
    setCallMatches(res.data);
  }

  useEffect(() => {
    fetchCalls();
  }, []);

  const searchCall = (text: String) => {
    if (!text) {
      setCallMatches(calls);
    } else {
      let matches = calls.filter((calls) => {
        const regex = new RegExp(`${text}`, "gi");
        return calls.tipoChamado.match(regex);
      });

      setCallMatches(matches);
    }
  };

  return (
    <CallContainer>
      <CallContent>
        <CallTitleContainer>
          <h1>Chamadas</h1>
          <p>Chamadas realizadas no momento</p>
        </CallTitleContainer>
        <input
          type="text"
          placeholder="Buscar por Chamada"
          onChange={(e) => searchCall(e.target.value)}
        />
        <CallList>
          {callMatches.map((call) => (
            <CallItem key={call.id} callItem={call} />
          ))}
        </CallList>
      </CallContent>
    </CallContainer>
  );
}
