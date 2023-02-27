import { Place } from "./components/PlacesItem";
import * as Dialog from "@radix-ui/react-dialog";
import { AvaliableModal } from "./components/AvaliableModal";
import { NewPlaceModal } from "./components/NewPlaceModal";
import { useContext, useState } from "react";
import { ResourcesContext } from "../../contexts/ResourcesContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Toggle, ButtonModal, Content, HeadingButtonContainer, MainContainer, SearchInput, TitleContainer } from "../../styles/commonStyle";
import { ListContainer } from "../../styles/listStyle";

export function Places() {
  document.title = "Ambientes | SGA";

  const { placesList } = useContext(ResourcesContext);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showDisable, setShowDisable] = useState<Boolean>(false);
  const { userAutheticated } = useContext(AuthContext);

  function closeModal() {
    setOpen(false);
  }

  let filteredPlaces =
    placesList.length > 0
      ? placesList.filter((place) => place.nome?.toLowerCase().includes(search))
      : [];

  return (
    <MainContainer>
      <Content>
        <TitleContainer>
          <h1>Ambientes</h1>
          <p>Selecione um ambiente ou crie um novo!</p>
          <HeadingButtonContainer>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <ButtonModal>Novo ambiente</ButtonModal>
              </Dialog.Trigger>
              <NewPlaceModal closeModal={closeModal} />
            </Dialog.Root>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <ButtonModal>Disponibilidade</ButtonModal>
              </Dialog.Trigger>
              <AvaliableModal />
            </Dialog.Root>
          </HeadingButtonContainer>
        </TitleContainer>
        <SearchInput
          type="text"
          placeholder="Busque um ou vários ambientes..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {userAutheticated.tipoUsuario == "ADMINISTRADOR" && (
          <Toggle>
            <label>Desativados</label>
            <input
              onChange={(e) => setShowDisable(e.target.checked)}
              type="checkbox"
            />
          </Toggle>
        )}
        <ListContainer>
          {filteredPlaces.map((place) => {
            if (place.ativo && showDisable == false) {
              return <Place key={place.id} placeItem={place} />;
            } else if (place.ativo == false && showDisable == true) {
              return <Place key={place.id} placeItem={place} />;
            }
          })}
        </ListContainer>
      </Content>
    </MainContainer>
  );
}
