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
  const { placesList } = useContext(ObjectsContext);
  const [placeMatchs, setPlaceMatchs] = useState<PlaceProps[]>([]);

  if (placesList.length > 0 && placeMatchs.length == 0) {
    setPlaceMatchs(placesList);
  }

  async function searchPlace(value: String) {
    if (value == "") {
      setPlaceMatchs(placesList);
    } else {
      const res = await API.get(`/ambiente/buscapalavra/${value}`);
      console.log(res.data);
      if (res.data == 0) {
      } else {
        setPlaceMatchs(res.data);
      }
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
