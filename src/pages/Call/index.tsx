import React, { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { CallItem } from "./components/CallItem";
import {
  CallContainer,
  CallContent,
  CallList,
  CallTitleContainer,
} from "./style";
import { Header } from "../../components/Header";

export interface CallInterface {
  id: number;
  tipo: string;
  descricao: string;
  foto: string;
  usuario: Usuario;
  status: string;
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
  document.title = "Chamados | SGA";

  const [calls, setCalls] = useState<CallInterface[]>([]);
  const [callMatches, setCallMatches] = useState<CallInterface[]>([]);

  async function fetchCalls() {
    const res = await API.get("chamado");

    if (res.status == 200) {
      setCalls(res.data);
      setCallMatches(res.data);
    }
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
        return calls.tipo.match(regex);
      });

      setCallMatches(matches);
    }
  };

  function handleDeleteCall(id: number){
    setCallMatches(callMatches.filter((call) => call.id != id))
  }

  return (
    <>
      <Header />
      <CallContainer>
        <CallContent>
          <CallTitleContainer>
            <h1>Chamados</h1>
            <p>Chamados realizados no momento</p>
          </CallTitleContainer>
          <input
            type="text"
            placeholder="Busque um ou vários chamados..."
            onChange={(e) => searchCall(e.target.value)}
          />
          <CallList>
            {callMatches.map((call) => (
              <CallItem deleteCall={handleDeleteCall} key={call.id} call={call} />
            ))}
          </CallList>
        </CallContent>
      </CallContainer>
    </>
  );
}
