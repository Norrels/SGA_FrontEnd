import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash, User } from "phosphor-react";
import React from "react";
import { z } from "zod";
import { AdminProps } from "../..";
import { API } from "../../../../lib/axios";
import { EditAdminModal } from "../EditAdminModal";
import {
  AdminItemButton,
  AdminItemButtonContainer,
  AdminItemContainer,
  AdminItemIcon,
  AdminItemInfoContent,
  AdminItemInfoContentName,
} from "./style";

interface NewAdminModalProps {
  admin: AdminProps;
}

export const adminInput = z.object({
  id: z.string(),
  nome: z.string(),
  nif: z.string(),
  email: z.string(),
});

export type AdminType = z.infer<typeof adminInput>;

export function AdminItem({ admin }: NewAdminModalProps) {
  async function handleDisableAdminAPI(data: AdminType) {
    const res = await API.put(`desativar/${data.nif}`);
  }

  return (
    <AdminItemContainer>
      <AdminItemInfoContent>
        <AdminItemIcon>
          <User size={30} />
        </AdminItemIcon>

        <AdminItemInfoContentName>
          <h3>{admin.nome}</h3>
          <p>{admin.nif}</p>
        </AdminItemInfoContentName>
      </AdminItemInfoContent>

      <AdminItemButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger style={{ border: "none" }}>
            <AdminItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </AdminItemButton>
          </Dialog.Trigger>
          <EditAdminModal admin={admin} key={admin.id} />
        </Dialog.Root>

        <AdminItemButton
          onClick={() => handleDisableAdminAPI(admin)}
          buttonColor="delete"
        >
          <Trash color="#fff" size={25} />
        </AdminItemButton>
      </AdminItemButtonContainer>
    </AdminItemContainer>
  );
}
