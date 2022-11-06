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
      <HeaderContainer>
        <HeaderContent>
          <img src={Logo} alt="" />

          <HeaderNavBar>
            <HeaderNavMenu>
              <NavLink to="/inicio" title="Início">
                Início
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

                  <HeaderNavMenuItem>
                    <NavLink to="/aulas">Aulas</NavLink>
                  </HeaderNavMenuItem>
                  <HeaderNavMenuItem>
                    <NavLink to="/dias-nao-letivos">Dias não letivo</NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
            <NavLink to="/dashboard" title="Dashboard">
              Dashboard
            </NavLink>
            <HeaderNavMenu>
              <NavLink to="/professores" title="Professor">
                Professores
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>

                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

                  <HeaderNavMenuItem>
                    <NavLink to="/ferias-coletiva">Ferias</NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
            <NavLink to="/cursos" title="Cursos">
              Cursos
            </NavLink>
            <NavLink to="/ambientes" title="Ambientes">
              Ambientes
            </NavLink>
            <HeaderNavMenu>
              <NavLink to="/chamados" title="Chamados">
                Chamados
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>
                  <HeaderNavMenuItem>
                    <NavLink to="/usuarios" title="Usuários">
                      Usuários
                    </NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
          </HeaderNavBar>

          <HeaderUser>
            <User size={23} />
            <p>Odair</p>
            <button>
              <CaretDown weight="fill" />
            </button>
          </HeaderUser>
        </HeaderContent>
      </HeaderContainer>
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
    </>
  );
}
