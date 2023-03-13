import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { ChalkboardTeacher, CheckCircle, DotsThree, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { ReactivateAlert } from "../../../../components/ReactivateAlert";
import { PlaceProps, ResourcesContext } from "../../../../contexts/ResourcesContext";
import { InfoType, ItemButton, ItemButtonContainer, ItemIcon, ItemInfoContentHeader, ListInfoContent, ListItemContainer } from "../../../../styles/listStyle";
import { EditPlaceModal } from "../EditPlaceModal";

interface PlacesProps {
  placeItem: PlaceProps;
}

export function Place({ placeItem }: PlacesProps) {
  const { updateStatusPlace } = useContext(ResourcesContext);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function handleUpdateStatusPlace() {
    updateStatusPlace(placeItem.id!)
  }

  return (
    <ListItemContainer>
      <ItemButtonContainer>
        <ItemIcon>
          <ChalkboardTeacher size={32} />
        </ItemIcon>

        <ListInfoContent>
          <ItemInfoContentHeader>
            <h3>{placeItem.nome}</h3>
            <InfoType>
              {placeItem?.tipo?.toLowerCase() === "unidade_movel"
                ? "Unidade Móvel"
                : placeItem?.tipo?.toLowerCase()}
            </InfoType>
          </ItemInfoContentHeader>
          {placeItem.tipo !== "REMOTO" && (
            <p>
              Quantidade de pessoas: <span>{placeItem.capacidade}</span>
            </p>
          )}
        </ListInfoContent>
      </ItemButtonContainer>

      <ItemButtonContainer>
        {placeItem.ativo == false ? (
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <ItemButton buttonColor="delete">
                <CheckCircle color="#fff" size={26} />
              </ItemButton>
            </AlertDialog.Trigger>
            <ReactivateAlert reactivateById={handleUpdateStatusPlace} />
          </AlertDialog.Root>
        ) : (
          <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                }}
              >
                <ItemButton buttonColor="edit">
                  <DotsThree color="#fff" size={32} />
                </ItemButton>
              </Dialog.Trigger>
              <EditPlaceModal place={placeItem} closeModal={closeModal} />
            </Dialog.Root>

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <ItemButton buttonColor="delete">
                  <Trash color="#fff" size={26} />
                </ItemButton>
              </AlertDialog.Trigger>
              <DeleteAlert deleteById={handleUpdateStatusPlace} />
            </AlertDialog.Root>
          </>
        )}
      </ItemButtonContainer>
    </ListItemContainer>
  );
}
