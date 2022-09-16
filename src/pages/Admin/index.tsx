import React from "react";
import { AdminItem } from "./components/AdminItem";
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
            <button>Novo administrador</button>
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
