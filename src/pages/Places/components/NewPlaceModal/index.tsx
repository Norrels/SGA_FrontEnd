import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
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

const newPlaceModalInput = z.object({
  id: z.number(),
  nome: z.string(),
  capacidade: z.number(),
  tipoAmbiente: z.enum([
    "UNIDADE_MOVEL",
    "PRESENCIAL",
    "REMOTO",
    "ENTIDADE",
    "EMPRESA",
  ]),
  cep: z.string(),
  // endereco: z.string(),
  complemento: z.string(),
  ativo: z.boolean(),
});

export type NewPlaceType = z.infer<typeof newPlaceModalInput>;

interface NewPlaceModalProps {
  closeModal: () => void;
}

export function NewPlaceModal({ closeModal }: NewPlaceModalProps) {
  const { register, handleSubmit, reset } = useForm<NewPlaceType>();
  const { createPlacesAPI } = useContext(ObjectsContext);
  const [tipoAmbiente, setTipoAmbiente] = useState("");

  function handleSelectTipoAmbiente(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
    setTipoAmbiente(event.target.value);
  }

  async function handleCreateNewPlace(data: NewPlaceType) {
    data.ativo = true;
    createPlacesAPI(data);
    reset();
    closeModal();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Novo ambiente</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form onSubmit={handleSubmit(handleCreateNewPlace)}>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome do ambiente"
                  {...register("nome")}
                />
              </InputContent>
              <InputContent>
                <label>Tipo</label>
                <select
                  placeholder="Selecione o tipo do ambiente"
                  {...register("tipoAmbiente")}
                  onChange={handleSelectTipoAmbiente}
                >
                  <option selected disabled>
                    Selecione o tipo do ambiente
                  </option>
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
                      tipoAmbiente === "REMOTO" || tipoAmbiente === ""
                        ? { opacity: "30%" }
                        : { opacity: "100%" }
                    }
                  >
                    Capacidade
                  </label>
                  <input
                    type="text"
                    placeholder="Digite a capacidade"
                    {...register("capacidade")}
                    disabled={tipoAmbiente === "REMOTO" || tipoAmbiente === ""}
                  />
                </InputIndividual>
                <InputIndividual>
                  <label
                    style={
                      tipoAmbiente === "EMPRESA" || tipoAmbiente === "ENTIDADE"
                        ? { opacity: "100%" }
                        : { opacity: "30%" }
                    }
                  >
                    CEP
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o cep"
                    {...register("cep")}
                    disabled={
                      tipoAmbiente !== "EMPRESA" && tipoAmbiente !== "ENTIDADE"
                    }
                  />
                </InputIndividual>
              </InputContent>
              <InputContent>
                <label
                  style={
                    tipoAmbiente === "EMPRESA" || tipoAmbiente === "ENTIDADE"
                      ? { opacity: "100%" }
                      : { opacity: "30%" }
                  }
                >
                  Endereço
                </label>
                <input
                  type="text"
                  placeholder="Digite o endereço"
                  /* {...register("endereco")} */
                  disabled={
                    tipoAmbiente !== "EMPRESA" && tipoAmbiente !== "ENTIDADE"
                  }
                />
              </InputContent>
              <InputContent>
                <label
                  style={
                    tipoAmbiente === "EMPRESA" || tipoAmbiente === "ENTIDADE"
                      ? { opacity: "100%" }
                      : { opacity: "30%" }
                  }
                >
                  Complemento
                </label>
                <input
                  type="text"
                  placeholder="Digite o complemento"
                  {...register("complemento")}
                  disabled={
                    tipoAmbiente !== "EMPRESA" && tipoAmbiente !== "ENTIDADE"
                  }
                />
              </InputContent>

              <FinalButton>
                <button>Criar</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
