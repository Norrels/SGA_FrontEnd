import * as Dialog from "@radix-ui/react-dialog";
import { ChalkboardTeacher, DotsThree, Trash } from "phosphor-react";
import { useContext } from "react";
import { ObjectsContext, PlaceProps } from "../../../../Contexts/ObjectsContext";
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
  const { deletePlace } = useContext(ObjectsContext)

  return (
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
              <EditPlaceModal place={placeItem}  />
            </Dialog.Root>

            <PlacesItemButton buttonColor="delete">
              <Trash
                color="#fff"
                size={25}
                onClick={() => deletePlace(placeItem.id)}
              />
            </PlacesItemButton>
          </PlacesItemButtonContainer>
        </PlacesItemContainer>
  )
}
