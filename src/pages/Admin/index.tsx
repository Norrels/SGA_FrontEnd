import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { AdminItem } from "./components/AdminItem";
import { NewAdminModal } from "./components/NewAdminModal";
import {
  AdminButtonContainer,
  AdminContainer,
  AdminContent,
  AdminList,
  AdminTitleContainer,
} from "./style";

export function Admin() {
  return (
    <AdminContainer>
      <AdminContent>
        <AdminTitleContainer>
          <h1>Administradores</h1>
          <p>Chamadas realizadas no momento</p>
          <AdminButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger>
              <button>Novo administrador</button>
              </Dialog.Trigger>
              <NewAdminModal />
            </Dialog.Root>
          </AdminButtonContainer>
        </AdminTitleContainer>
        <input type="text" placeholder="Buscar por Ambiente" />

        <AdminList>
          <AdminItem />
          <AdminItem />
          <AdminItem />
          <AdminItem />
          <AdminItem />
          <AdminItem />
        </AdminList>
      </AdminContent>
    </AdminContainer>
  );
}
