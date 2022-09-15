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
            <NavLink to="/aulas">Início</NavLink>
            <CaretDown weight="fill" />
          </HeaderNavMenu>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <HeaderNavMenu>
            <NavLink to="/professores">Professores</NavLink>
            <CaretDown weight="fill" />
          </HeaderNavMenu>
          <NavLink to="/cursos">Cursos</NavLink>
          <NavLink to="/ambientes">Ambientes</NavLink>
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
