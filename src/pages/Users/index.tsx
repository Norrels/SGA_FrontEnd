import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { UserItem } from "./components/UserItem";
import { NewUserModal } from "./components/NewUserModal";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
("");
import {
  Content,
  HeadingButtonContainer,
  MainContainer,
  SearchInput,
  TitleContainer,
  Toggle,
  ButtonModal,
  HeadingContainer,
} from "../../styles/commonStyle";
import { ListContainer } from "../../styles/listStyle";
import { Heading } from "../Components/Heading";

export interface IUserProps {
  id?: string;
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

  const [users, setUsers] = useState<IUserProps[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  // Variável utilizada para mostrar ou não usuário desabilitados
  const [showDisable, setShowDisable] = useState<Boolean>(false);

  // Aqui eu pego o usuário logado
  const { userAutheticated } = useContext(AuthContext);

  // Interceptor
  if (userAutheticated.tipoUsuario != "ADMINISTRADOR") {
    return <Navigate to="/inicio" replace={true} />;
  }

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const response = await API.get("usuario");
    setUsers(response.data);
  }

  let filteredUsers =
    users.length > 0
      ? users.filter((user) => user.nome?.toLowerCase().includes(search))
      : [];

  function handleCreateUser(data: IUserProps) {
    setUsers([...users, data]);
  }

  function handleEditUser(data: IUserProps) {
    const usuario = users.map((user) => {
      if (user.id == data.id) {
        user = data;
      }
      return user;
    });
    setUsers(usuario);
  }

  function handleDeleteUser(id: string) {
    setUsers(
      users.map((user) => {
        if (user.id == id) {
          user.ativo = !user.ativo;
        }
        return user;
      })
    );
  }

  return (
    <MainContainer>
      <Content>
        <HeadingContainer>
          <Heading
            subtitle="Selecione um usuário ou crie um novo!"
            title="Usuários"
          />
          <HeadingButtonContainer>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <ButtonModal>Novo Usuário</ButtonModal>
              </Dialog.Trigger>
              <NewUserModal
                closeModal={closeModal}
                handleCreateUser={handleCreateUser}
              />
            </Dialog.Root>
          </HeadingButtonContainer>
        </HeadingContainer>

        <SearchInput
          type="text"
          placeholder="Busque um ou vários usuários..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Toggle>
          <label>Desativados</label>
          <input
            onChange={(e) => setShowDisable(e.target.checked)}
            type="checkbox"
          />
        </Toggle>
        <ListContainer>
          {filteredUsers?.map((user) => {
            if (
              user.ativo &&
              showDisable == false &&
              user.id != userAutheticated.id
            ) {
              return (
                <UserItem
                  editUser={handleEditUser}
                  deleteUser={handleDeleteUser}
                  key={user.id}
                  user={user}
                />
              );
            } else if (
              user.ativo == false &&
              showDisable &&
              user.id != userAutheticated.id
            ) {
              return (
                <UserItem
                  editUser={handleEditUser}
                  deleteUser={handleDeleteUser}
                  key={user.id}
                  user={user}
                />
              );
            }
          })}
        </ListContainer>
      </Content>
    </MainContainer>
  );
}
