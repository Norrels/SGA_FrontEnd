import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ButtonContainer, Content, DescriptionAlert, Overlay } from "./style";

interface ReactivateAlertProps {
  reactivateById: () => void;
}

export function ReactivateAlert({ reactivateById }: ReactivateAlertProps) {
  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Tem certeza que deseja reativa-lo?
        </AlertDialog.Title>

        <DescriptionAlert>
          Essa ação pode ser desfeita a qualquer momento, no entanto, ao
          ativa-lo você e outros usuários poderão visualizar e referenciar esse item novamente.
        </DescriptionAlert>

        <ButtonContainer>
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>

          <AlertDialog.Action onClick={() => reactivateById()}>
            Sim, reative-o
          </AlertDialog.Action>
        </ButtonContainer>
      </Content>
    </AlertDialog.Portal>
  );
}
