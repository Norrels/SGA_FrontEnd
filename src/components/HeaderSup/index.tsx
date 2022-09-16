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

export function HeaderSup() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <HeaderNavBar>
          <NavLink to="/chamadas">Chamadas</NavLink>
          <NavLink to="/admins">Administradores</NavLink>
        </HeaderNavBar>

        <HeaderUser>
          <User size={23} />
          <p>Chile</p>
          <button>
            <CaretDown weight="fill" />
          </button>
        </HeaderUser>
      </HeaderContent>
    </HeaderContainer>
  );
}
