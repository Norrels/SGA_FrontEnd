import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Pencil, Trash, User } from "phosphor-react";
import React, { useState } from "react";
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

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function handleDisableAdminAPI(data: AdminType) {
    const res = await API.put(`usuario/desativar/${data.id}`);
    console.log(res);
  }

  return (
    <>
      {admin.ativo ? (
        <>
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
              <Dialog.Root open={open} onOpenChange={setOpen} >
                <Dialog.Trigger style={{ border: "none" }}>
                  
                    <DotsThree color="#000" size={25} />
                 
                </Dialog.Trigger>
                <EditAdminModal closeModal={closeModal} admin={admin} key={admin.id} />
              </Dialog.Root>

              <AdminItemButton
                onClick={() => handleDisableAdminAPI(admin)}
                buttonColor="delete"
              >
                <Trash color="#fff" size={25} />
              </AdminItemButton>
            </AdminItemButtonContainer>
          </AdminItemContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
