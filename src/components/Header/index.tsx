import { User, CaretDown } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderUser,
} from "./style";
import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <HeaderNavBar>
          <NavLink to="/aulas">Início</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/professores">Professores</NavLink>
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
