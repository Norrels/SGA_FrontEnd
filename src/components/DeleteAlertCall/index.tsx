import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ButtonContainer, Content, DescriptionAlert, Overlay } from "./style";

interface DeleteAlertProps {
    deleteById: () => void
}

export function DeleteAlertCall({deleteById} : DeleteAlertProps) {
  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Tem certeza que deseja exclui-lo?
        </AlertDialog.Title>

        <DescriptionAlert>
          Essa ação não pode ser desfeita, você não
          conseguirá referenciar e nem visualizar esse item.
        </DescriptionAlert>

        <ButtonContainer>
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>

          <AlertDialog.Action onClick={() => deleteById()}>Sim, delete-o</AlertDialog.Action>
        </ButtonContainer>
      </Content>
    </AlertDialog.Portal>
  );
}
