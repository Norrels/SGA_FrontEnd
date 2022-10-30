import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ObjectsContext,
} from "../../../../Contexts/ObjectsContext";
import { NewPlaceType } from "../NewPlaceModal";
import {
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";


interface EditPlaceModalProps {
  place: NewPlaceType;
  closeModal: () => void;
}

export function EditPlaceModal({ place, closeModal }: EditPlaceModalProps) {
  const { register, handleSubmit } = useForm<NewPlaceType>();
  const [editable, setEditable] = useState(false);
  const { updatePlaces } = useContext(ObjectsContext);

  async function handleUpdatePlace(data: NewPlaceType) {
    data.id = place.id
    updatePlaces(data);
    closeModal();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
        <ModalHeader>
          <Dialog.Title>
            {!editable ? "Ambiente" : "Editar ambiente"}
          </Dialog.Title>
          <HeaderButtons>
            {!editable ? (
              <button onClick={() => setEditable(true)}>
                <NotePencil
                  size={50}
                  weight="light"
                />
              </button>
            ) : (
              <></>
            )}
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleUpdatePlace)}>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome do ambiente"
                  defaultValue={place.nome}
                  {...register("nome")}
                  readOnly={!editable}
                />
              </InputContent>
              <InputContent>
                <label>Tipo</label>
                <select
                  placeholder="Selecione o tipo do ambiente"
                  defaultValue={place.tipoAmbiente}
                  {...register("tipoAmbiente")}
                  disabled
                >
                  <option value="UNIDADE_MOVEL">Unidade Movel</option>
                  <option value="PRESENCIAL">Presencial</option>
                  <option value="REMOTO">Remoto</option>
                  <option value="ENTIDADE">Entidade</option>
                  <option value="EMPRESA">Empresa</option>
                </select>
              </InputContent>
              <InputContent>
                <InputIndividual>
                  <label
                    style={
                      place.tipoAmbiente === "REMOTO"
                        ? { opacity: "30%" }
                        : { opacity: "100%" }
                    }
                  >
                    Capacidade
                  </label>
                  <input
                    type="text"
                    placeholder="Digite a capacidade"
                    defaultValue={place?.capacidade}
                    {...register("capacidade")}
                    readOnly={place.tipoAmbiente !== "REMOTO" && !editable}
                    disabled={place.tipoAmbiente === "REMOTO"}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label
                    style={
                      place.tipoAmbiente === "EMPRESA" ||
                      place.tipoAmbiente === "ENTIDADE"
                        ? { opacity: "100%" }
                        : { opacity: "30%" }
                    }
                  >
                    CEP
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o cep"
                    defaultValue={place?.cep}
                    {...register("cep")}
                    readOnly={
                      (place.tipoAmbiente === "EMPRESA" ||
                        place.tipoAmbiente === "ENTIDADE") &&
                      !editable
                    }
                    disabled={
                      place.tipoAmbiente !== "EMPRESA" &&
                      place.tipoAmbiente !== "ENTIDADE"
                    }
                  />
                </InputIndividual>
              </InputContent>
              <InputContent>
                <label
                  style={
                    place.tipoAmbiente === "EMPRESA" ||
                    place.tipoAmbiente === "ENTIDADE"
                      ? { opacity: "100%" }
                      : { opacity: "30%" }
                  }
                >
                  Endereço
                </label>
                <input
                  type="text"
                  placeholder="Digite o endereço"
                  /* defaultValue={place?.endereco} */
                  /* {...register("endereco")} */
                  readOnly={
                    (place.tipoAmbiente === "EMPRESA" ||
                      place.tipoAmbiente === "ENTIDADE") &&
                    !editable
                  }
                  disabled={
                    place.tipoAmbiente !== "EMPRESA" &&
                    place.tipoAmbiente !== "ENTIDADE"
                  }
                />
              </InputContent>
              <InputContent>
                <label
                  style={
                    place.tipoAmbiente === "EMPRESA" ||
                    place.tipoAmbiente === "ENTIDADE"
                      ? { opacity: "100%" }
                      : { opacity: "30%" }
                  }
                >
                  Complemento
                </label>
                <input
                  type="text"
                  placeholder="Digite o complemento"
                  defaultValue={place?.complemento}
                  {...register("complemento")}
                  readOnly={
                    (place.tipoAmbiente === "EMPRESA" ||
                      place.tipoAmbiente === "ENTIDADE") &&
                    !editable
                  }
                  disabled={
                    place.tipoAmbiente !== "EMPRESA" &&
                    place.tipoAmbiente !== "ENTIDADE"
                  }
                />
              </InputContent>
              {editable ? (
                <FinalButton>
                  <button>Salvar</button>
                </FinalButton>
              ) : (
                <></>
              )}
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
