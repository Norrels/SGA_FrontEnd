import { PlacesItem } from "./components/PlacesItem";
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

export function Places() {
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
          <PlacesItem />
          <PlacesItem />
          <PlacesItem />
          <PlacesItem />
          <PlacesItem />
          <PlacesItem />
          <PlacesItem />
        </PlacesList>
      </PlacesContent>
    </PlacesContainer>
  );
}
