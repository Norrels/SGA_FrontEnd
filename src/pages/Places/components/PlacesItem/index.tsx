import * as Dialog from "@radix-ui/react-dialog";
import { ChalkboardTeacher, DotsThree, Trash } from "phosphor-react";
import React from "react";
import { EditPlaceModal } from "../EditPlaceModal";
import {
  PlacesItemButton,
  PlacesItemButtonContainer,
  PlacesItemContainer,
  PlacesItemIcon,
  PlacesItemInfoContainer,
  PlacesItemInfoContent,
} from "./style";

interface Place {
  id: number;
  name?: string;
  capacidade?: number;
  tipoAmbiente?: string;
  cep?: string;
  complemento?: string;
}
[];

export function Place({
  id,
  name,
  capacidade,
  tipoAmbiente,
  cep,
  complemento,
}: Place) {
  return (
    <PlacesItemContainer>
      <PlacesItemInfoContainer>
        <PlacesItemIcon>
          <ChalkboardTeacher size={30} />
        </PlacesItemIcon>

        <PlacesItemInfoContent>
          <h3>{name}</h3>
          <p>Capacidade: {capacidade}</p>
        </PlacesItemInfoContent>
      </PlacesItemInfoContainer>

      <PlacesItemButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger style={{border : "none"}}>
            <PlacesItemButton id={id + ""} buttonColor="edit">
              <DotsThree size={25} />
            </PlacesItemButton>
          </Dialog.Trigger>
          <EditPlaceModal
            id={id}
            name={name}
            capacidade={capacidade}
            tipoAmbiente={tipoAmbiente}
            cep={cep}
            complemento={complemento}
            click={true}
          />
        </Dialog.Root>

        <PlacesItemButton id={id + ""} buttonColor="delete">
          <Trash color="#fff" size={25} />
        </PlacesItemButton>
      </PlacesItemButtonContainer>
    </PlacesItemContainer>
  );
}
