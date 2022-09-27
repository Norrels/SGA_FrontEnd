import { Place } from "./components/PlacesItem";
import * as Dialog from "@radix-ui/react-dialog";
import {
  PlacesButtonContainer,
  PlacesContainer,
  PlacesContent,
  PlacesList,
  PlacesTitleContainer,
} from "./style";
import { AvaliableModal } from "./components/AvaliableModal";
import { NewPlaceModal } from "./components/NewPlaceModal";
import { useEffect, useState } from "react";
import { API } from "../../lib/axios";

export interface PlaceInterface {
  id: number;
  nome: string;
  capacidade: number;
  tipoAmbiente: string;
  cep: string;
  complemento: string;
  ativo: boolean;
}
[];

export function Places() {
  const [places, setPlaces] = useState<PlaceInterface[]>([]);

  async function fetchPlaces() {
    const res = await API.get("ambiente");
    setPlaces(res.data);
  }

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <PlacesContainer>
      <PlacesContent>
        <PlacesTitleContainer>
          <h1>Ambientes</h1>
          <p>Selecione um Ambiente ou crie um novo!</p>

          <PlacesButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo ambiente</button>
              </Dialog.Trigger>
              <NewPlaceModal />
            </Dialog.Root>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Disponibilidade</button>
              </Dialog.Trigger>
              <AvaliableModal />
            </Dialog.Root>
          </PlacesButtonContainer>
        </PlacesTitleContainer>
        <input type="text" placeholder="Buscar por ambiente " />

        <PlacesList>
          {places.map((place) => (
            <Place key={place.id} placeItem={place} />
          ))}
        </PlacesList>
      </PlacesContent>
    </PlacesContainer>
  );
}
