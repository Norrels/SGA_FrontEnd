import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  CloseButton,
  Content,
  EditUserModalDuoContainer,
  Overlay,
} from "./style";

export function EditUserModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Editar Usuário</Dialog.Title>
        <form action="">
          <article>
            <label>Nome</label>
            <input type="text" placeholder="Digite o seu nome" />
          </article>

          <EditUserModalDuoContainer>
            <div>
              <label>NIF</label>
              <input type="text" placeholder="Insira seu NIF" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Digite o seu Email" />
            </div>
          </EditUserModalDuoContainer>

          <article>
            <label>Senha</label>
            <input type="password" placeholder="Insira sua nova senha" />
          </article>

          <article>
            <label>Repita a Senha</label>
            <input type="password" placeholder="Repita a senha" />
          </article>

          <button type="submit">Editar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
