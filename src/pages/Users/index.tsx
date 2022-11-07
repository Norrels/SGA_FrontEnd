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
import { Header } from "../../components/Header";

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
      <Header />
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
            placeholder="Busque um ou vários usuários..."
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
