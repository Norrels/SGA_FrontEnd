import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ButtonContainer, Content, DescriptionAlert, Overlay } from "./style";

interface DeleteAlertProps {
    deleteById: () => void
}

export function DeleteAlert({deleteById} : DeleteAlertProps) {
  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Tem certeza que deseja excluir-lo?
        </AlertDialog.Title>

        <DescriptionAlert>
          Essa ação pode ser desfeita a qualquer momento, no entanto, você não
          conseguira referenciar nem visualizar esse item, até ele ser
          novamente ativado.
        </DescriptionAlert>

        <ButtonContainer>
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>

          <AlertDialog.Action onClick={() => deleteById()}>Sim, delete-o</AlertDialog.Action>
        </ButtonContainer>
      </Content>
    </AlertDialog.Portal>
  );
}
