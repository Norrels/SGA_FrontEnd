import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { Watch, X } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { z } from "zod";
import { Notification } from "../../../../components/Notification";
import { ResourcesContext } from "../../../../contexts/ResourcesContext";
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
  id: z.string().optional(),
  nome: z
    .string()
    .max(60, { message: "* O nome deve ser menor que 60 caracteres..." })
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." }),
  tipo: z.literal("PRESENCIAL"),
  capacidade: z
    .number({ invalid_type_error: "* Informe a capacidade..." })
    .min(1, { message: "* A capacidade deve ser maior que 1..." }),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  complemento: z.string().optional(),
  ativo: z.boolean().optional(),
});

const unidadeMovelValidation = z.object({
  id: z.string().optional(),
  nome: z
    .string()
    .max(60, { message: "* O nome deve ser menor que 60 caracteres..." })
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." }),
  tipo: z.literal("UNIDADE_MOVEL"),
  capacidade: z
    .number({ invalid_type_error: "* Informe a capacidade..." })
    .min(1, { message: "* A capacidade deve ser maior que 1..." }),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  complemento: z.string().optional(),
  ativo: z.boolean().optional(),
});

const empresaValidation = z.object({
  id: z.string().optional(),
  nome: z
    .string()
    .max(60, { message: "* O nome deve ser menor que 60 caracteres..." })
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." }),
  tipo: z.literal("EMPRESA"),
  capacidade: z
    .number({ invalid_type_error: "* Informe a capacidade..." })
    .min(1, { message: "* A capacidade deve ser maior que 1..." }),
  cep: z
    .string({ invalid_type_error: "* Informe um cep..." })
    .length(8, { message: "* O CEP deve ter 8 caracteres..." }),
  endereco: z
    .string({ required_error: "* Insira um CEP ou informe um endereço..." })
    .max(50, { message: "* O endereço deve ser menor que 50 caracteres..." })
    .min(4, { message: "* O endereço deve ser maior que 3 caracteres..." }),
  complemento: z.string().optional(),
  ativo: z.boolean().optional(),
});

const entidadeValidation = z.object({
  id: z.string().optional(),
  nome: z
    .string()
    .max(60, { message: "* O nome deve ser menor que 60 caracteres..." })
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." }),
  tipo: z.literal("ENTIDADE"),
  capacidade: z
    .number({ invalid_type_error: "* Informe a capacidade..." })
    .min(1, { message: "* A capacidade deve ser maior que 1..." }),
  cep: z
    .string({ invalid_type_error: "* Informe um cep..." })
    .length(8, { message: "* O CEP deve ter 8 caracteres..." }),
  endereco: z
    .string({ required_error: "* Insira um CEP ou informe um endereço..." })
    .max(50, { message: "* O endereço deve ser menor que 50 caracteres..." })
    .min(4, { message: "* O endereço deve ser maior que 3 caracteres..." }),
  complemento: z.string().optional(),
  ativo: z.boolean().optional(),
});

const remotoValidation = z.object({
  id: z.string().optional(),
  nome: z
    .string()
    .max(60, { message: "* O nome deve ser menor que 60 caracteres..." })
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." }),
  tipo: z.literal("REMOTO"),
  capacidade: z.number().optional(),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  complemento: z.string().optional(),
  ativo: z.boolean().optional(),
});

export const allValidation = z.discriminatedUnion("tipo", [
  presencialValidation,
  unidadeMovelValidation,
  entidadeValidation,
  empresaValidation,
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
  const { createPlacesAPI } = useContext(ResourcesContext);
  const [tipoAmbiente, setTipoAmbiente] = useState("");
  const [adress, setAdress] = useState("");
  const [cep, setCep] = useState("");

  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  function handleSelectTipoAmbiente(event: ChangeEvent<HTMLSelectElement>) {
    if (tipoAmbiente == "" || tipoAmbiente != event.target.value) {
      reset(
        { capacidade: undefined, complemento: "", cep: "", endereco: "" },
        {
          keepDirty: false,
          keepValues: false,
        }
      );
    }
    setTipoAmbiente(event.target.value);
  }

  async function handleCreateNewPlace(data: NewPlaceType) {
    data.ativo = true;
    createPlacesAPI(data)
      .then(() => {
        reset();
        closeModal();
      })
      .catch(() => setNotificationStataus(true));
    setOpen(true);
    onCloseModalPlaces();
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  async function fetchCep(e: ChangeEvent<HTMLInputElement>) {
    setAdress("");
    const cepRaw = e.target.value.replace(/_/g, "").replace("-", "");
    setCep(cepRaw);
    if (cepRaw.length >= 8) {
      await fetch(`https://viacep.com.br/ws/${cepRaw}/json/`).then(
        (response) => {
          if (response.status >= 200 && response.status < 299) {
            response.json().then((data) => {
              if (!adress && data.logradouro !== undefined) {
                const endereco = `${data.logradouro} - ${data.localidade}, ${data.uf}`;

                setValue("endereco", endereco);
                setAdress(endereco);
              }
            });
          }
        }
      );
    }
    setValue("endereco", adress);
  }


  function onCloseModalPlaces() {
    closeModal();
    reset();
    setTipoAmbiente("");
    setCep("");
    setAdress("");
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => onCloseModalPlaces()}>
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
                    {...register("nome", {
                      required: true,
                    })}
                    minLength={4}
                    maxLength={61}
                    required
                  />
                  {errors.nome && <p>{errors.nome.message}</p>}
                </InputContent>
                <InputContent>
                  <label>Tipo</label>
                  <select
                    placeholder="Selecione o tipo do ambiente"
                    {...register("tipo")}
                    onChange={handleSelectTipoAmbiente}
                    defaultValue=""
                    required
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
                  {errors.tipo && <p>* Selecione um valor</p>}
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
                      onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                      placeholder="Digite a capacidade"
                      min="1"
                      {...register("capacidade", {
                        valueAsNumber: true,
                        required: true,
                      })}
                      disabled={
                        tipoAmbiente === "REMOTO" || tipoAmbiente === ""
                      }
                      required={tipoAmbiente !== "REMOTO"}
                    />
                    {errors.capacidade && <p>{errors.capacidade.message}</p>}
                  </InputIndividual>
                  <InputIndividual>
                    <label
                      style={
                        tipoAmbiente === "EMPRESA" ||
                        tipoAmbiente === "ENTIDADE"
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
                      {...register("cep", {
                        setValueAs: (v) =>
                          (v = v.replace(/_/g, "").replace("-", "").trim()),
                      })}
                      onChange={fetchCep}
                      disabled={
                        tipoAmbiente !== "EMPRESA" &&
                        tipoAmbiente !== "ENTIDADE"
                      }
                      required={
                        tipoAmbiente == "EMPRESA" || tipoAmbiente == "ENTIDADE"
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
                    disabled={cep.length < 8}
                    required={
                      tipoAmbiente == "EMPRESA" || tipoAmbiente == "ENTIDADE"
                    }
                    minLength={4}
                    maxLength={70}
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
                    disabled={cep.length < 8}
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
      <Notification
        tipe={notificationStataus ? "Erro" : "Sucesso"}
        description={
          notificationStataus ? "Falha ao criar." : "Criado com sucesso."
        }
        title="Ambiente"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
