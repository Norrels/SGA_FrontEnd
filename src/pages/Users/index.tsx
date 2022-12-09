import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../contexts/AuthContext";
import { UserType } from "./components/UserItem";

export interface UserProps {
  id: string;
  nome: string;
  email: string;
  nif: string;
  tipo: string;
  senha?: string;
  ativo?: boolean;
}
[];

export function User() {
  document.title = "Usuários | SGA";

  const [user, setUser] = useState<UserProps[]>([]);
  const [userMatches, setUserMatches] = useState<UserProps[]>([]);
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState<Boolean>(false);

  const { userAutheticated } = useContext(AuthContext)

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

  function handleAddInMatchs() {
    fetchUser();
  }

  function handleUpdateUserActive(id: number) {
    setUserMatches(userMatches.map((user) => {
      if(Number(user.id) == id) {
        if(user.ativo) {
          user.ativo = false;
        } else {
          user.ativo = true;
        }
      }
      return user;
    }))
  }

  // REVER O METODO
  function handleEditUserArray(data: UserType) {
    console.log(data);
    setUserMatches(userMatches.map((user) => {
      if(data.id == user.id) {
        user = data
      }
      return user;
    }));
  }

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
                <NewUserModal handleAddInMatchs={handleAddInMatchs} closeModal={closeModal} />
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
              if (user.ativo && on == false && user.id !=  userAutheticated.id) {
                return <UserItem editUser={handleEditUserArray} deleteUser={handleUpdateUserActive} key={user.id} user={user} />;
              } else if (user.ativo == false && on == true && user.id !=  userAutheticated.id) {
                return <UserItem editUser={handleEditUserArray} deleteUser={handleUpdateUserActive} key={user.id} user={user} />;
              }
            })}
          </UsersList>
        </UsersContent>
      </UsersContainer>
    </>
  );
}
