import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { ChalkboardTeacher, CheckCircle, DotsThree, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { DeleteAlert } from "../../../../components/DeleteAlert";
import { ReactivateAlert } from "../../../../components/ReactivateAlert";
import { ObjectsContext } from "../../../../contexts/ObjectsContext";
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
  const { updateStatusPlace } = useContext(ObjectsContext);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function handleUpdateStatusPlace() {
    updateStatusPlace(placeItem.id!);
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
        {placeItem.ativo == false ? (
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <PlacesItemButton buttonColor="delete">
                <CheckCircle color="#fff" size={26} />
              </PlacesItemButton>
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
                <PlacesItemButton buttonColor="edit">
                  <DotsThree color="#fff" size={32} />
                </PlacesItemButton>
              </Dialog.Trigger>
              <EditPlaceModal place={placeItem} closeModal={closeModal} />
            </Dialog.Root>

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <PlacesItemButton buttonColor="delete">
                  <Trash color="#fff" size={26} />
                </PlacesItemButton>
              </AlertDialog.Trigger>
              <DeleteAlert deleteById={handleUpdateStatusPlace} />
            </AlertDialog.Root>
          </>
        )}
      </PlacesItemButtonContainer>
    </PlacesItemContainer>
  );
}
