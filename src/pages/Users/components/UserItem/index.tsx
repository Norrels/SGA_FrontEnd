import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle, DotsThree, Trash, User } from "phosphor-react";
import { useState } from "react";
import { z } from "zod";
import { IUserProps } from "../..";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { ReactivateAlert } from "../../../../components/ReactivateAlert";
import { API } from "../../../../lib/axios";
import { InfoType, ItemButton, ItemButtonContainer, ItemIcon, ItemInfoContentHeader, ListInfoContent, ListItemContainer } from "../../../../styles/listStyle";
import { EditUserModal } from "../EditUserModal";

interface NewUserModalProps {
  user: IUserProps;
  deleteUser: (id: string) => void;
  editUser: (data: UserType) => void;
}

const userInput = z.object({
  id: z.string(),
  nome: z.string(),
  nif: z.string(),
  email: z.string(),
  tipo: z.string(),
  ativo: z.boolean().optional()
});

export type UserType = z.infer<typeof userInput>;

export function UserItem({ user, deleteUser, editUser }: NewUserModalProps) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function updateActiveUser() {
    try {
      const res = await API.put(`/usuario/desativar/${user.id}`);
      deleteUser(user.id!);
    } catch (error) {
      console.log("Error" + error);
    }
  }

  function handleEditUser(data: UserType) {
    data.ativo = true
    editUser(data);
  }

  return (
    <ListItemContainer>
      <ItemButtonContainer>
        <ItemIcon>
          <User size={32} />
        </ItemIcon>

        <ListInfoContent>
          <ItemInfoContentHeader>
            <h3>{user.nome}</h3>
            <InfoType>
              <p>
                {user.tipo.toLowerCase() == "usuario"
                  ? "usuário"
                  : user.tipo.toLowerCase()}
              </p>
            </InfoType>
          </ItemInfoContentHeader>
          <p>
            NIF: <span>{user.nif}</span>
          </p>
        </ListInfoContent>
      </ItemButtonContainer>
      <ItemButtonContainer>
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
                <ItemButton buttonColor="edit">
                  <DotsThree color="#fff" size={32} />
                </ItemButton>
              </Dialog.Trigger>
              <EditUserModal
                editUser={handleEditUser}
                closeModal={closeModal}
                user={user}
                key={user.id}
              />
            </Dialog.Root>

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <ItemButton buttonColor="delete">
                  <Trash color="#fff" size={26} />
                </ItemButton>
              </AlertDialog.Trigger>
              <DeleteAlert deleteById={updateActiveUser} />
            </AlertDialog.Root>
          </>
        ) : (
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <ItemButton buttonColor="delete">
                <CheckCircle color="#fff" size={26} />
              </ItemButton>
            </AlertDialog.Trigger>
            <ReactivateAlert reactivateById={updateActiveUser} />
          </AlertDialog.Root>
        )}
      </ItemButtonContainer>
    </ListItemContainer>
  );
}
