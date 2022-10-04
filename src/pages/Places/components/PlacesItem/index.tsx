import * as Dialog from "@radix-ui/react-dialog";
import { ChalkboardTeacher, DotsThree, Trash } from "phosphor-react";
import { PlaceProps } from "../../../../Contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { EditPlaceModal } from "../EditPlaceModal";
import {
  PlacesItemButton,
  PlacesItemButtonContainer,
  PlacesItemContainer,
  PlacesItemIcon,
  PlacesItemInfoContainer,
  PlacesItemInfoContent,
} from "./style";

interface PlacesProps {
  placeItem: PlaceProps;
}

export function Place({ placeItem }: PlacesProps) {
  function editNewPlace(data: PlaceProps) {}

  async function handleDisablePlace(data: PlaceProps) {
    const res = await API.put(`ambiente/inativar/${placeItem.id}`);

    if (res.status == 200) {
      console.log("deu certo");
    }
  }

  return (
    <>
      {placeItem.ativo ? (
        <PlacesItemContainer>
          <PlacesItemInfoContainer>
            <PlacesItemIcon>
              <ChalkboardTeacher size={30} />
            </PlacesItemIcon>

            <PlacesItemInfoContent>
              <h3>{placeItem.nome}</h3>
              <p>Capacidade: {placeItem.capacidade}</p>
            </PlacesItemInfoContent>
          </PlacesItemInfoContainer>

          <PlacesItemButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger style={{ border: "none" }}>
                <PlacesItemButton buttonColor="edit">
                  <DotsThree size={25} />
                </PlacesItemButton>
              </Dialog.Trigger>
              <EditPlaceModal
                editNewPlace={editNewPlace}
                placeItem={placeItem}
              />
            </Dialog.Root>

            <PlacesItemButton /* id={id + ""} */ buttonColor="delete">
              <Trash
                color="#fff"
                size={25}
                onClick={() => handleDisablePlace(placeItem)}
              />
            </PlacesItemButton>
          </PlacesItemButtonContainer>
        </PlacesItemContainer>
      ) : (
        <></>
      )}
    </>
  );
}
