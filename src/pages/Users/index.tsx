import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import {

  Toggle,
  UsersButtonContainer,
  UsersContainer,
  UsersContent,
  UsersList,
  UsersTitleContainer,
} from "./style";
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
  ativo: boolean;
}
[];

export function User() {
  document.title = "Usuários | SGA";

  const [user, setUser] = useState<UserProps[]>([]);
  const [userMatches, setUserMatches] = useState<UserProps[]>([]);
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState<Boolean>(false);

  function closeModal() {
    setOpen(false);
  }

  async function fetchUser() {
    const res = await API.get("usuario");

    setUser(res.data);
    setUserMatches(res.data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  async function handleChangeList(value: Boolean) {
    setOn(value);
    if (value) {
      setUserMatches(user.filter((e) => e.ativo == false));
    } else {
      setUserMatches(user.filter((e) => e.ativo == true));
    }
  }

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
            <input
              onChange={(e) => handleChangeList(e.target.checked)}
              type="checkbox"
            />
          </Toggle>
          <UsersList>
            {userMatches.map((user) => {
              if (user.ativo && on == false) {
                return <UserItem key={user.id} user={user} />;
              } else if (user.ativo == false && on == true) {
                return <UserItem key={user.id} user={user} />;
              }
            })}
          </UsersList>
        </UsersContent>
      </UsersContainer>
    </>
  );
}
