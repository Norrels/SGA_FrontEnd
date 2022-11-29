import { User, CaretDown, CaretUp, SignOut } from "phosphor-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderEditUserButton,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
} from "./style";
import Logo from "../../assets/Logo.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { EditUserModal } from "./components/EditProfileModal";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const { logout } = useContext(AuthContext)

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
      <HeaderContainer>
        <HeaderContent>
          <img src={Logo} alt="" />

          <HeaderNavBar>
            <HeaderNavMenu>
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

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

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
                      <NavLink to="/dias-nao-letivos">Dias não letivos</NavLink>
                    )}
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
            </HeaderNavMenu>
            <NavLink to="/cursos" title="Cursos">
              Cursos
            </NavLink>
            <NavLink to="/ambientes" title="Ambientes">
              Ambientes
            </NavLink>
            <HeaderNavMenu>
              {location.pathname == "/chamados" ? (
                <p>Chamados</p>
              ) : location.pathname == "/usuarios" ? (
                <p>Usuários</p>
              ) : (
                <p>Suporte</p>
              )}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>
                  <HeaderNavMenuItem>
                    {location.pathname !== "/chamados" && (
                      <NavLink to="/chamados" title="Chamados">
                        Chamados
                      </NavLink>
                    )}
                  </HeaderNavMenuItem>
                  <HeaderNavMenuItem>
                    {location.pathname !== "/usuarios" && (
                      <NavLink to="/usuarios" title="usuarios">
                        Usuários
                      </NavLink>
                    )}
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
          </HeaderNavBar>

          <HeaderUser>
            <User size={23} />
            <p>Odair</p>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <CaretDown weight="fill" style={{ cursor: "pointer" }} />
              </DropdownMenu.Trigger>

              <HeaderNavMenuContent>
                <HeaderNavMenuArrow>
                  <CaretUp weight="fill" size={30} />
                </HeaderNavMenuArrow>

                <HeaderNavMenuItem onClick={closeAulas}>
                  <HeaderEditUserButton>Seu perfil</HeaderEditUserButton>
                </HeaderNavMenuItem>
                <HeaderNavMenuItem>
                  <HeaderEditUserButton
                    onClick={() => logout()}
                  >
                    Sair <SignOut />
                  </HeaderEditUserButton>
                </HeaderNavMenuItem>
              </HeaderNavMenuContent>
            </DropdownMenu.Root>
          </HeaderUser>
        </HeaderContent>
      </HeaderContainer>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <EditUserModal closeModal={closeModal} />
      </Dialog.Root>
    </>
  );
}
