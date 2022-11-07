import React, { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { CallItem } from "./components/CallItem";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CallContainer,
  CallContent,
  CallList,
  CallTitleContainer,
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
} from "./style";
import { NavLink } from "react-router-dom";
import { CaretDown, CaretUp, User } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { Header } from "../../components/Header";

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
    <>
      <Header/>
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
              <CallItem key={call.id} callItem={call} />
            ))}
          </CallList>
        </CallContent>
      </CallContainer>
    </>
  );
}
