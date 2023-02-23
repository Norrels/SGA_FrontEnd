import {
  User,
  CaretDown,
  CaretUp,
  SignOut,
  BellRinging,
  Palette,
} from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderEditUserButton,
  HeaderNavBar,
  HeaderNavGroup,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
} from "./style";
import Logo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { EditUserModal } from "./components/EditProfileModal";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as Menubar from "@radix-ui/react-menubar";
import { UpdateMenu } from "../UpdateMenu";
import { ColorPickerMenu } from "../ColorPickerMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const { userAutheticated } = useContext(AuthContext);

  const location = useLocation();

  function closeModal() {
    setOpen(false);
  }

  function closeAulas() {
    setTimeout(() => {
      setOpen(true);
    }, 5);
  }

  return (
    <>
      <Menubar.Root>
        <HeaderContainer>
          <HeaderContent>
            <img src={Logo} alt="" />

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
                </HeaderNavGroup>

                <Menubar.Content align="start">
                  <HeaderNavMenuContent>
                    <HeaderNavMenuItem>
                      {location.pathname == "/aulas" ? (
                        <NavLink to="/inicio">Inicio</NavLink>
                      ) : (
                        <NavLink to="/aulas">Aulas</NavLink>
                      )}
                    </HeaderNavMenuItem>
                    <HeaderNavMenuItem>
                      {location.pathname == "/dias-nao-letivos" ? (
                        <NavLink to="/inicio">Inicio</NavLink>
                      ) : (
                        <NavLink to="/dias-nao-letivos">
                          Dias não letivos
                        </NavLink>
                      )}
                    </HeaderNavMenuItem>
                  </HeaderNavMenuContent>
                </Menubar.Content>
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
                <ColorPickerMenu />
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger asChild>
                  <User size={23} style={{ cursor: "pointer" }} />
                </Menubar.Trigger>

                <HeaderNavMenuContent align="center">
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

                  <HeaderNavMenuItem onClick={closeAulas}>
                    <HeaderEditUserButton>Seu perfil</HeaderEditUserButton>
                  </HeaderNavMenuItem>
                  <HeaderNavMenuItem>
                    <HeaderEditUserButton onClick={() => logout()}>
                      Sair <SignOut />
                    </HeaderEditUserButton>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </Menubar.Menu>
            </HeaderUser>
          </HeaderContent>
        </HeaderContainer>
      </Menubar.Root>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <EditUserModal closeModal={closeModal} />
      </Dialog.Root>
    </>
  );
}
