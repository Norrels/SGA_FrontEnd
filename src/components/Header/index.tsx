import { User, CaretDown, BellRinging, Palette } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavGroup,
  HeaderNavMenu,
  HeaderUser,
} from "./style";


import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as Menubar from "@radix-ui/react-menubar";
import { UpdateMenu } from "../Menus/UpdateMenu";
import { ColorPickerMenu } from "../Menus/ColourPickerMenu";
import { UserMenu } from "../Menus/UserMenu";
import { HomeMenu } from "../Menus/HomeMenu";
import { IHeaderProps } from "../../layout/DefaultLayout";

import { ThemeContext } from 'styled-components'

export function Header({changeTheme}: IHeaderProps) {
  const { userAutheticated } = useContext(AuthContext);

  const themeContext = useContext(ThemeContext)
  
  const location = useLocation();

  return (
    <>
      <Menubar.Root>
        <HeaderContainer>
          <HeaderContent>
            <img src={`/Logo-${themeContext.theme}.svg`} alt="" />

            <HeaderNavBar>
              <HeaderNavMenu>
                <HeaderNavGroup>
                  {location.pathname == "/dias-nao-letivos" ? (
                    <NavLink to="/dias-nao-letivos" title="Dias não letivos">
                      Dias não letivos
                    </NavLink>
                  ) : location.pathname == "/aulas" ? (
                    <NavLink to="/aulas" title="Aulas">
                      Aulas
                    </NavLink>
                  ) : (
                    <NavLink to="/inicio" title="Início">
                      Início
                    </NavLink>
                  )}

                  <Menubar.Trigger>
                    <CaretDown weight="fill" />
                  </Menubar.Trigger>

                  <HomeMenu />
                </HeaderNavGroup>
              </HeaderNavMenu>

              <NavLink to="/dashboard" title="Dashboard">
                Dashboard
              </NavLink>

              <NavLink to="/professores" title="Professor">
                Professores
              </NavLink>

              <NavLink to="/cursos" title="Cursos">
                Cursos
              </NavLink>

              <NavLink to="/ambientes" title="Ambientes">
                Ambientes
              </NavLink>

              {userAutheticated?.tipoUsuario == "ADMINISTRADOR" && (
                <NavLink to="/usuarios" title="usuarios">
                  Usuários
                </NavLink>
              )}
            </HeaderNavBar>

            <HeaderUser>
              <Menubar.Menu>
                <Menubar.Trigger>
                  <BellRinging size={23} />
                </Menubar.Trigger>
                <UpdateMenu />
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger>
                  <Palette size={25} />
                </Menubar.Trigger>
                <ColorPickerMenu changeTheme={changeTheme}/>
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger asChild>
                  <User size={23} style={{ cursor: "pointer" }} />
                </Menubar.Trigger>
                <UserMenu />
              </Menubar.Menu>
            </HeaderUser>
          </HeaderContent>
        </HeaderContainer>
      </Menubar.Root>
    </>
  );
}
