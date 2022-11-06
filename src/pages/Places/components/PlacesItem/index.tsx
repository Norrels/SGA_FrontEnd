import * as Dialog from "@radix-ui/react-dialog";
import { ChalkboardTeacher, DotsThree, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  ObjectsContext,
} from "../../../../Contexts/ObjectsContext";
import { EditPlaceModal } from "../EditPlaceModal";
import { NewPlaceType } from "../NewPlaceModal";
import {
  ItemInfoContentHeader,
  PlaceInfoType,
  PlacesItemButton,
  PlacesItemButtonContainer,
  PlacesItemContainer,
  PlacesItemIcon,
  PlacesItemInfoContainer,
  PlacesItemInfoContent,
} from "./style";

interface PlacesProps {
  placeItem: NewPlaceType;
  /* placeAnimationDelay: number; */
}

export function Place({ placeItem /* placeAnimationDelay */ }: PlacesProps) {
  const { deletePlace } = useContext(ObjectsContext);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  return (
    <PlacesItemContainer>
      <PlacesItemInfoContainer>
        <PlacesItemIcon>
          <ChalkboardTeacher size={32} />
        </PlacesItemIcon>

        <PlacesItemInfoContent>
          <ItemInfoContentHeader>
            <h3>{placeItem.nome}</h3>
            <PlaceInfoType>
              {placeItem?.tipo?.toLowerCase() === "unidade_movel"
                ? "Unidade Móvel"
                : placeItem?.tipo?.toLowerCase()}
            </PlaceInfoType>
          </ItemInfoContentHeader>
          {placeItem.tipo !== "REMOTO" && (
            <p>
              Quantidade de pessoas: <span>{placeItem.capacidade}</span>
            </p>
          )}
        </PlacesItemInfoContent>
      </PlacesItemInfoContainer>

      <PlacesItemButtonContainer>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
            }}
          >
            <PlacesItemButton buttonColor="edit">
              <DotsThree color="#fff" size={32} />
            </PlacesItemButton>
          </Dialog.Trigger>
          <EditPlaceModal place={placeItem} closeModal={closeModal} />
        </Dialog.Root>

        <PlacesItemButton buttonColor="delete">
          <Trash
            color="#fff"
            size={26}
            onClick={() => deletePlace(placeItem.id!)}
          />
        </PlacesItemButton>
      </PlacesItemButtonContainer>
    </PlacesItemContainer>
  );
}
