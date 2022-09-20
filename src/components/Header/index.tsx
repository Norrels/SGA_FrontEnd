import { User, CaretDown, CaretUp } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
} from "./style";
import Logo from "../../assets/Logo.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <HeaderNavBar>
          <HeaderNavMenu>
            <NavLink to="/aulas" title="Início">
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
                  <NavLink to="/busca-avancada">Aulas</NavLink>
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
                  <NavLink to="/ferias-coletiva">Ferias coletiva</NavLink>
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
  );
}
