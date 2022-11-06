import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
  Toggle,
  UsersButtonContainer,
  UsersContainer,
  UsersContent,
  UsersList,
  UsersTitleContainer,
} from "./style";
import { NavLink } from "react-router-dom";
import { CaretDown, CaretUp } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { UserItem } from "./components/UserItem";
import { NewUserModal } from "./components/NewUserModal";

export interface UserProps {
  id: string;
  nome: string;
  email: string;
  nif: string;
  tipo: string;
  senha: string;
  ativo: string;
}
[];

export function User() {
  const [user, setUser] = useState<UserProps[]>([]);
  const [userMatches, setUserMatches] = useState<UserProps[]>([]);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function fetchUser() {
    const res = await API.get("usuario");

    console.log(res.data);
    setUser(res.data);
    setUserMatches(res.data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const searchUser = (text: String) => {
    if (!text) {
      setUserMatches(user);
    } else {
      let matches = user.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.nome.match(regex) || user.nif.match(regex);
      });
      setUserMatches(matches);
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
            <NavLink to="/usuarios" title="Usuários">
                Usuários
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
                    <NavLink to="/chamados" title="Chamados">
                      Chamados
                    </NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
          </HeaderNavBar>

          <HeaderUser>
            <p>Odair</p>
            <button>
              <CaretDown weight="fill" />
            </button>
          </HeaderUser>
        </HeaderContent>
      </HeaderContainer>
      <UsersContainer>
        <UsersContent>
          <UsersTitleContainer>
            <h1>Usuários</h1>
            <p>Selecione um usuário ou crie um novo!</p>
            <UsersButtonContainer>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger>Novo usuário</Dialog.Trigger>
                <NewUserModal closeModal={closeModal} />
              </Dialog.Root>
            </UsersButtonContainer>
          </UsersTitleContainer>
          <input
            type="text"
            placeholder="Busque um ou vários usúarios..."
            onChange={(e) => searchUser(e.target.value)}
          />
          <Toggle>
            <label>Desativados</label>
            <input type="checkbox" />
          </Toggle>
          <UsersList>
            {userMatches.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </UsersList>
        </UsersContent>
      </UsersContainer>
    </>
  );
}
