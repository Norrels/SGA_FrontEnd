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
import { NewPlaceModal, NewPlaceType } from "./components/NewPlaceModal";
import { useContext, useEffect, useState } from "react";
import { ObjectsContext } from "../../Contexts/ObjectsContext";
import { API } from "../../lib/axios";

export function Places() {
  const { placesList } = useContext(ObjectsContext)
  const [placeMatchs, setPlaceMatchs] = useState<NewPlaceType[]>([]);
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(true);

  /* let animationDelay = 1;

  if (!animation) {
    animationDelay = 0;
  } */

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    handleGetPlaces();
  }, [placesList]);

  async function handleGetPlaces() {
    const resp = await API.get("/ambiente");

    if (resp.status == 200) {
      setPlaceMatchs(resp.data);
    }
  }

  async function searchPlace(value: String) {
    setAnimation(false);
    if (!value) {
      setPlaceMatchs(placesList);
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
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button>Novo ambiente</button>
              </Dialog.Trigger>
              <NewPlaceModal closeModal={closeModal} />
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
          placeholder="Buscar por ambiente"
          onChange={(e) => searchPlace(e.target.value)}
        />

        <PlacesList>
          {placeMatchs.map(
            (place) =>
              place.ativo === true && <Place key={place.id} placeItem={place} /* placeAnimationDelay={animationDelay+=0.2} */  />
          )}
        </PlacesList>
      </PlacesContent>
    </PlacesContainer>
  );
}
