import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { AdminItem } from "./components/AdminItem";
import { NewAdminModal } from "./components/NewAdminModal";
import {
  AdminButtonContainer,
  AdminContainer,
  AdminContent,
  AdminList,
  AdminTitleContainer,
} from "./style";

export interface AdminProps {
  id: string;
  nome: string;
  email: string;
  nif: string;
  tipoCurso: string;
  senha: string;
  ativo: string;
}[]

export function Admin() {
  
  const [admin, setAdmin] = useState<AdminProps[]>([]);

  async function fetchAdmin() {
    const res = await API.get("usuario")
    
    console.log(res.data)
    setAdmin(res.data);
  }

  useEffect(() => {
    fetchAdmin();
  }, []);

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
          {admin.map((admin) => (
            <AdminItem key={admin.id} admin={admin} />
          ))}
        </AdminList>
      </AdminContent>
    </AdminContainer>
  );
}
