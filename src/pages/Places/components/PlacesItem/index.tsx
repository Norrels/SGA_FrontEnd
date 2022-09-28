import * as Dialog from "@radix-ui/react-dialog";
import { ChalkboardTeacher, DotsThree, Trash } from "phosphor-react";
import React from "react";
import { PlaceInterface } from "../..";
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
  placeItem: PlaceInterface;
}

export function Place({ placeItem }: PlacesProps) {
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
          <EditPlaceModal />
        </Dialog.Root>

        <PlacesItemButton /* id={id + ""} */ buttonColor="delete">
          <Trash color="#fff" size={25} />
        </PlacesItemButton>
      </PlacesItemButtonContainer>
    </PlacesItemContainer>
  );
}
