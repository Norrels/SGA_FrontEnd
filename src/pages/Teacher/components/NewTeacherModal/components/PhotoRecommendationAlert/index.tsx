import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ButtonContainer, Content, DescriptionAlert, Overlay } from "./style";

export function PhotoRecommendationAlert() {
  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>
          Recomendação para o tamnho da foto.
        </AlertDialog.Title>

        <DescriptionAlert>
          Para uma melhor vizualização da foto do professor no sistema, recomendamos que as <strong>medidas sejam iguais</strong>.
          Assim a foto não ficará esticada ou borrada, um bom tamanho é <strong>100x100</strong>.
        </DescriptionAlert>

        <ButtonContainer>
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
        </ButtonContainer>
      </Content>
    </AlertDialog.Portal>
  );
}
