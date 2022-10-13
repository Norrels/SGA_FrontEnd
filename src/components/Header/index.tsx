import { User, CaretDown, CaretUp, SignOut } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
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
import { EditUserModal } from "./components/EditUserModal";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <CaretDown weight="fill" />
            </DropdownMenu.Trigger>

            <HeaderNavMenuContent>
              <HeaderNavMenuArrow>
                <CaretUp weight="fill" size={30} />
              </HeaderNavMenuArrow>

              <HeaderNavMenuItem as={Dialog.Root}>
                <Dialog.Trigger asChild>
                  <HeaderEditUserButton>Editar Perfil</HeaderEditUserButton>
                </Dialog.Trigger>
                <EditUserModal />
              </HeaderNavMenuItem>
              <HeaderNavMenuItem>
                <HeaderEditUserButton
                  onClick={() => navigate("/", { replace: true })}
                >
                  Sair <SignOut />
                </HeaderEditUserButton>
              </HeaderNavMenuItem>
            </HeaderNavMenuContent>
          </DropdownMenu.Root>
        </HeaderUser>
      </HeaderContent>
    </HeaderContainer>
  );
}
