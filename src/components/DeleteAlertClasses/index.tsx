import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ButtonContainer, Content, DescriptionAlert, Overlay } from "./style";

interface DeleteAlertClassesProps {
  deleteByPartitionKey: () => void;
}

export function DeleteAlertClasses({
  deleteByPartitionKey,
}: DeleteAlertClassesProps) {
  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Tem certeza que deseja excluir toda essa sequência de aulas?
        </AlertDialog.Title>

        <DescriptionAlert>
          Essa ação não pode ser desfeita, você não conseguirá referenciar e nem
          visualizar essas aulas.
        </DescriptionAlert>

        <ButtonContainer>
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>

          <AlertDialog.Action onClick={() => deleteByPartitionKey()}>
            Sim, delete-as
          </AlertDialog.Action>
        </ButtonContainer>
      </Content>
    </AlertDialog.Portal>
  );
}
