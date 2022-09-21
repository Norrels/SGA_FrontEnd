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

export function Places() {
  const places = [
    {
      id: 1,
      name: "Base CT CAI DS",
      capacidade: 32,
      tipoAmbiente: "Unidade Movel",
      cep: "07654-321",
      complemento: "Local lá longe",
    },
    {
      id: 2,
      name: "Lab-18",
      capacidade: 42,
      tipoAmbiente: "Presencial",
      cep: "",
      complemento: "",
    },
    {
      id: 3,
      name: "Postal Log",
      capacidade: 18,
      tipoAmbiente: "Empresa",
      cep: "08412-741",
      complemento: "é em uma empresa",
    },
  ];

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
          {places.map((value) => (
            <Place
              key={value.id}
              id={value.id}
              name={value.name}
              capacidade={value.capacidade}
              tipoAmbiente={value.tipoAmbiente}
              cep={value.cep}
              complemento={value.complemento}
            />
          ))}
        </PlacesList>
      </PlacesContent>
    </PlacesContainer>
  );
}
