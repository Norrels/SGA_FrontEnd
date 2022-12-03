import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ButtonContainer, Content, DescriptionAlert, Overlay } from "./style";

export function FirstAcessAlert() {
  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Seja bem vindo!
        </AlertDialog.Title>

        <DescriptionAlert>
          Sua senha de acesso são os digitos antes do <strong>@</strong> do seu email cadastrado no sistema,
          por exemplo <strong>maria123</strong>@gmail.com, <br/> logo a senha da maria é <strong>maria123</strong>.
        </DescriptionAlert>

        <ButtonContainer>
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
        </ButtonContainer>
      </Content>
    </AlertDialog.Portal>
  );
}
