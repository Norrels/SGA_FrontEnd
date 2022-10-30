import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
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

const presencialValidation = z.object({
  id: z.number().optional(),
  tipoAmbiente: z.literal("PRESENCIAL"),
  nome: z
    .string()
    .max(20, { message: "* O nome não deve ter mais de 20 caracteres..." })
    .min(3, { message: "* O nome deve ser maior que 3 caracteres..." }),
  capacidade: z
    .number({ invalid_type_error: "* Informe um valor" })
    .min(3, { message: "* Deve ser maior que 1 caracter" }),
  ativo: z.boolean().optional(),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  complemento: z.string().optional(),
});

const unidadeMovelValidation = z.object({
  id: z.number().optional(),
  tipoAmbiente: z.literal("UNIDADE_MOVEL"),
  capacidade: z
    .number({ invalid_type_error: "* Informe um valor" })
    .min(3, { message: "* Deve ser maior que 1 caracter" }),
  nome: z
    .string()
    .max(20, { message: "* O nome não deve ter mais de 20 caracteres..." })
    .min(3, { message: "* O nome deve ser maior que 3 caracteres..." }),
  ativo: z.boolean().optional(),
  cep: z.string(),
  endereco: z.string(),
  complemento: z.string().optional(),
});

const empresalValidation = z.object({
  id: z.number().optional(),
  tipoAmbiente: z.literal("EMPRESA"),
  capacidade: z
    .number({ invalid_type_error: "* Informe um valor" })
    .min(1, { message: "* Deve ser maior que 1 caracter" }),
  complemento: z.string().optional(),
  nome: z
    .string()
    .max(20, { message: "* O nome não deve ter mais de 20 caracteres..." })
    .min(3, { message: "* O nome deve ser maior que 3 caracteres..." }),
  cep: z
    .string()
    .max(10, { message: "* O CEP deve ter 8 caracteres..." })
    .min(3, { message: "* O CEP deve ter 8 caracteres......" }),
  endereco: z
    .string({ required_error: "* Digite um CEP ou informe um endeço" })
    .max(35, { message: "* O endereço não deve ter mais de 20 caracteres..." })
    .min(3, { message: "* O endereço deve ser maior que 3 caracteres..." }),
  ativo: z.boolean().optional(),
});

const entidadelValidation = z.object({
  id: z.number().optional(),
  tipoAmbiente: z.literal("ENTIDADE"),
  capacidade: z
    .number({ invalid_type_error: "* Informe um valor" })
    .min(1, { message: "* Deve ser maior que 1 caracter" }),
  complemento: z.string().optional(),
  nome: z
    .string()
    .max(20, { message: "* O nome não deve ter mais de 20 caracteres..." })
    .min(3, { message: "* O nome deve ser maior que 3 caracteres..." }),
  cep: z
    .string()
    .max(10, { message: "* O CEP deve ter 8 caracteres..." })
    .min(3, { message: "* O CEP deve ter 8 caracteres......" }),
  endereco: z
    .string({ required_error: "* Digite um CEP ou informe um endeço" })
    .max(35, { message: "* O endereço não deve ter mais de 20 caracteres..." })
    .min(3, { message: "* O endereço deve ser maior que 3 caracteres..." }),
  ativo: z.boolean().optional(),
});

const remotoValidation = z.object({
  id: z.number().optional(),
  tipoAmbiente: z.literal("REMOTO"),
  nome: z
    .string()
    .max(20, { message: "* O nome não deve ter mais de 20 caracteres..." })
    .min(3, { message: "* O nome deve ser maior que 3 caracteres..." }),
  ativo: z.boolean().optional(),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  complemento: z.string().optional(),
  capacidade: z.number().optional(),
});

const allValidation = z.discriminatedUnion("tipoAmbiente", [
  presencialValidation,
  unidadeMovelValidation,
  entidadelValidation,
  empresalValidation,
  remotoValidation,
]);

export type NewPlaceType = z.infer<typeof allValidation>;

interface NewPlaceModalProps {
  closeModal: () => void;
}

export function NewPlaceModal({ closeModal }: NewPlaceModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<NewPlaceType>({ resolver: zodResolver(allValidation) });
  const { createPlacesAPI } = useContext(ObjectsContext);
  const [tipoAmbiente, setTipoAmbiente] = useState("");
  const [adress, setAdress] = useState("");

  function handleSelectTipoAmbiente(event: ChangeEvent<HTMLSelectElement>) {
    if (tipoAmbiente == "" || tipoAmbiente != event.target.value) {
      reset({ capacidade: undefined, complemento: "", cep: "", endereco: "" }, {
        keepDirty: false,
        keepValues: false
      });
    }
    setTipoAmbiente(event.target.value);
  }

  async function handleCreateNewPlace(data: NewPlaceType) {
    data.ativo = true;
    setAdress("");
    createPlacesAPI(data);
    reset();
    closeModal();
  }

  async function fetchCep(e: ChangeEvent<HTMLInputElement>) {
    const ceps = e.target.value.replace(/_/g, "").replace("-", "");

    if (ceps.toString().length >= 8) {
      await fetch(`https://viacep.com.br/ws/${ceps}/json/`).then((response) => {
        response.json().then((data) => {
          if (!adress) {
            setValue("endereco", data.logradouro);
          }
          setAdress(data.logradouro);
        });
      });
    }
    setValue("endereco", adress);
  }

  console.log(errors);
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
                {errors.nome && <p>{errors.nome.message}</p>}
              </InputContent>
              <InputContent>
                <label>Tipo</label>
                <select
                  placeholder="Selecione o tipo do ambiente"
                  {...register("tipoAmbiente")}
                  onChange={handleSelectTipoAmbiente}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione o tipo do ambiente
                  </option>
                  <option value="UNIDADE_MOVEL">Unidade Movel</option>
                  <option value="PRESENCIAL">Presencial</option>
                  <option value="REMOTO">Remoto</option>
                  <option value="ENTIDADE">Entidade</option>
                  <option value="EMPRESA">Empresa</option>
                </select>
                {errors.tipoAmbiente && <p>* Selecione um valor</p>}
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
                    type="number"
                    placeholder="Digite a capacidade"
                    {...register("capacidade", { valueAsNumber: true })}
                    disabled={tipoAmbiente === "REMOTO" || tipoAmbiente === ""}
                  />
                  {errors.capacidade && <p>{errors.capacidade.message}</p>}
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
                  <InputMask
                    mask="99999-999"
                    type="text"
                    placeholder="Digite um CEP"
                    {...register("cep")}
                    onChange={fetchCep}
                    disabled={
                      tipoAmbiente !== "EMPRESA" && tipoAmbiente !== "ENTIDADE"
                    }
                  />
                  {errors.cep && <p>{errors.cep.message}</p>}
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
                  value={adress}
                  {...register("endereco")}
                  onChange={(event) => setAdress(event.target.value)}
                  disabled={
                    tipoAmbiente !== "EMPRESA" && tipoAmbiente !== "ENTIDADE"
                  }
                />
                {errors.endereco && <p>{errors.endereco.message}</p>}
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
