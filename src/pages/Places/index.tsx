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
import { useContext, useEffect, useState } from "react";
import { ObjectsContext, PlaceProps } from "../../Contexts/ObjectsContext";
import { API } from "../../lib/axios";

export function Places() {
  const [places, setPlaces] = useState<PlaceProps[]>([]);
  const [placeMatchs, setPlaceMatchs] = useState<PlaceProps[]>([]);

  useEffect(() => {
    handleGetPlaces();
  }, []);

  async function handleGetPlaces() {
    const resp = await API.get("/ambiente");

    if (resp.status == 200) {
      setPlaces(resp.data);
      setPlaceMatchs(resp.data);
    }
  }

  async function searchPlace(value: String) {
    if (!value) {
      setPlaceMatchs(places);
    } else {
      const res = await API.get(`/ambiente/buscapalavra/${value}`);
      setPlaceMatchs(res.data);
    }
  }

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
        <input
          type="text"
          onChange={(e) => searchPlace(e.target.value)}
          placeholder="Buscar por ambiente "
        />

        <PlacesList>
          {placeMatchs.map(
            (place) =>
              place.ativo === true && <Place key={place.id} placeItem={place} />
          )}
        </PlacesList>
      </PlacesContent>
    </PlacesContainer>
  );
}
