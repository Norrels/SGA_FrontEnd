import { PlacesItem } from "./components/PlacesItem";
import * as Dialog from "@radix-ui/react-dialog";
import { PlacesButtonContainer, PlacesContainer, PlacesContent, PlacesList, PlacesTitleContainer } from "./style";
import { AvaliableModal } from "./components/AvaliableModal";

export function Places() {
  return (
    <PlacesContainer>
      <PlacesContent>
        <PlacesTitleContainer>
          <h1>Ambientes</h1>
          <p>Selecione um Ambiente ou crie um novo!</p>

          <PlacesButtonContainer>
            <button>Novo ambiente</button>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Disponibilidade</button>
              </Dialog.Trigger>
              <AvaliableModal />
            </Dialog.Root>
        </PlacesButtonContainer>
      </PlacesTitleContainer>
      <input type="text" placeholder="Burcar por ambiente " />

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
    </PlacesContainer >


  )
}