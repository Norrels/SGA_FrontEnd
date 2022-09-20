import { User, CaretDown } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderUser,
} from "./style";
import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <HeaderNavBar>
          <HeaderNavMenu>
            <NavLink to="/aulas" title="Início">Início</NavLink>
            <CaretDown weight="fill" />
          </HeaderNavMenu>
          <NavLink to="/dashboard" title="Dashboard">Dashboard</NavLink>
          <HeaderNavMenu>
            <NavLink to="/professores" title="Professor">Professores</NavLink>
            <CaretDown weight="fill" />
          </HeaderNavMenu>
          <NavLink to="/cursos" title="Cursos">Cursos</NavLink>
          <NavLink to="/ambientes" title="Ambientes">Ambientes</NavLink>
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
