import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ObjectsContext } from "../../../../contexts/ObjectsContext";
import { allValidation, NewPlaceType } from "../NewPlaceModal";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPlaceType>({ resolver: zodResolver(allValidation) });
  const [editable, setEditable] = useState(false);
  const { updatePlaces } = useContext(ObjectsContext);

  async function handleUpdatePlace(data: NewPlaceType) {
    data.id = place.id;
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
            {!editable && (
              <button onClick={() => setEditable(true)}>
                <NotePencil size={50} weight="light" />
              </button>
            )}
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleUpdatePlace)}>
          <InputScroll>
            <InputContainer>
              <InputContent disabled={"on"}>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome do ambiente"
                  defaultValue={place.nome}
                  {...register("nome")}
                  readOnly={!editable}
                />
                {errors.nome && <p>{errors.nome.message}</p>}
              </InputContent>
              <InputContent disabled={"disabled"}>
                <label>Tipo</label>
                <select
                  placeholder="Selecione o tipo do ambiente"
                  defaultValue={place.tipo}
                  {...register("tipo")}
                >
                  <option value="UNIDADE_MOVEL">Unidade Movel</option>
                  <option value="PRESENCIAL">Presencial</option>
                  <option value="REMOTO">Remoto</option>
                  <option value="ENTIDADE">Entidade</option>
                  <option value="EMPRESA">Empresa</option>
                </select>
              </InputContent>
              <InputContent disabled={"on"}>
                <InputIndividual>
                  <label
                    style={
                      place.tipo === "REMOTO"
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
                    {...register("capacidade", { valueAsNumber: true })}
                    readOnly={place.tipo !== "REMOTO" && !editable}
                    disabled={place.tipo === "REMOTO"}
                  />
                  {errors.capacidade && <p>{errors.capacidade.message}</p>}
                </InputIndividual>
                <InputIndividual>
                  <label
                    style={
                      place.tipo === "EMPRESA" ||
                      place.tipo === "ENTIDADE"
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
                      (place.tipo === "EMPRESA" ||
                        place.tipo === "ENTIDADE") &&
                      !editable
                    }
                    disabled={
                      place.tipo !== "EMPRESA" &&
                      place.tipo !== "ENTIDADE"
                    }
                  />
                  {errors.cep && <p>{errors.cep.message}</p>}
                </InputIndividual>
              </InputContent>
              <InputContent disabled={"on"}>
                <label
                  style={
                    place.tipo === "EMPRESA" ||
                    place.tipo === "ENTIDADE"
                      ? { opacity: "100%" }
                      : { opacity: "30%" }
                  }
                >
                  Endereço
                </label>
                <input
                  type="text"
                  placeholder="Digite o endereço"
                  defaultValue={place?.endereco}
                  {...register("endereco")}
                  readOnly={
                    (place.tipo === "EMPRESA" ||
                      place.tipo === "ENTIDADE") &&
                    !editable
                  }
                  disabled={
                    place.tipo !== "EMPRESA" &&
                    place.tipo !== "ENTIDADE"
                  }
                />
                {errors.endereco && <p>{errors.endereco.message}</p>}
              </InputContent>
              <InputContent disabled={"on"}>
                <label
                  style={
                    place.tipo === "EMPRESA" ||
                    place.tipo === "ENTIDADE"
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
                    (place.tipo === "EMPRESA" ||
                      place.tipo === "ENTIDADE") &&
                    !editable
                  }
                  disabled={
                    place.tipo !== "EMPRESA" &&
                    place.tipo !== "ENTIDADE"
                  }
                />
                {errors.complemento && <p>{errors.complemento.message}</p>}
              </InputContent>
              {editable && (
                <FinalButton>
                  <button>Salvar</button>
                </FinalButton>
              )}
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
