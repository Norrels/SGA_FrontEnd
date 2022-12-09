import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle, DotsThree, Trash, User } from "phosphor-react";
import { useState } from "react";
import { z } from "zod";
import { UserProps } from "../..";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { ReactivateAlert } from "../../../../components/ReactivateAlert";
import { API } from "../../../../lib/axios";
import { EditUserModal } from "../EditUserModal";
import {
  ItemInfoContentHeader,
  UserInfoType,
  UserItemButton,
  UserItemButtonContainer,
  UserItemContainer,
  UserItemIcon,
  UserItemInfoContainer,
  UserItemInfoContent,
} from "./style";

interface NewUserModalProps {
  user: UserProps;
  deleteUser: (id: number) => void;
  editUser: (data: UserType) => void;
}

export const userInput = z.object({
  id: z.string(),
  nome: z.string(),
  nif: z.string(),
  email: z.string(),
  tipo: z.string(),
});

export type UserType = z.infer<typeof userInput>;

export function UserItem({ user, deleteUser, editUser }: NewUserModalProps) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function handleUpdateStatusUserAPI() {
    const res = await API.put(`/usuario/desativar/${user.id}`);

    if (res.status == 200) {
      deleteUser(Number(user.id));
    }
  }

  function handleForIndex(data: UserType) {
    editUser(data);
  }

  return (
    <UserItemContainer>
      <UserItemInfoContainer>
        <UserItemIcon>
          <User size={32} />
        </UserItemIcon>

        <UserItemInfoContent>
          <ItemInfoContentHeader>
            <h3>{user.nome}</h3>
            <UserInfoType>
              <p>{user.tipo.toLowerCase() == 'usuario' ? 'usuário' : user.tipo.toLowerCase()}</p>
            </UserInfoType>
          </ItemInfoContentHeader>
          <p>
            NIF: <span>{user.nif}</span>
          </p>
        </UserItemInfoContent>
      </UserItemInfoContainer>
      <UserItemButtonContainer>
        {user.ativo ? (
          <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                }}
              >
                <UserItemButton buttonColor="edit">
                  <DotsThree color="#fff" size={32} />
                </UserItemButton>
              </Dialog.Trigger>
              <EditUserModal
                editUser={handleForIndex}
                closeModal={closeModal}
                user={user}
                key={user.id}
              />
            </Dialog.Root>

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <UserItemButton buttonColor="delete">
                  <Trash color="#fff" size={26} />
                </UserItemButton>
              </AlertDialog.Trigger>
              <DeleteAlert deleteById={handleUpdateStatusUserAPI} />
            </AlertDialog.Root>
          </>
        ) : (
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <UserItemButton buttonColor="delete">
                <CheckCircle color="#fff" size={26} />
              </UserItemButton>
            </AlertDialog.Trigger>
            <ReactivateAlert reactivateById={handleUpdateStatusUserAPI} />
          </AlertDialog.Root>
        )}
      </UserItemButtonContainer>
    </UserItemContainer>
  );
}
